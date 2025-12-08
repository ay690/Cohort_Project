import { FilterBar } from "../components/layout";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/common";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        setError(error);
        console.log("Error in fetching the products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4 mt-4">Food Items</h1>
      <FilterBar />
      {error && <div className="text-red-500">Error in loading data...</div>}
      {!loading && !error && product.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product?.map((prod) => (
            <ProductCard product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
