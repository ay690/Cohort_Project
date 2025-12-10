import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByID } from "../api/FoodApi";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const prod = await fetchProductByID(id);
        setProduct(prod);
      } catch (err) {
        console.error(err);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    if (id) getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-lg font-semibold">
        Loading product...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {product?.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full transition-transform object-cover"
              />
            ) : (
              <span className="text-gray-400">No image</span>
            )}
          </div>

          {/* Content */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {product?.name}
            </h1>

            <p className="mt-3 text-gray-600">{product?.description}</p>

            <div className="mt-4 text-2xl font-semibold text-green-600">
              ₹ {Number(product?.price || 0).toFixed(2)}
            </div>

            <button className="mt-6 w-fit bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
