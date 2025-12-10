import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`)
  }

  const handleCart = () => {
    console.log(product);
  }

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform"
        />
      </div>
      <div className="p-3 flex flex-col">
        <h2 className="font-semibold text-sm md:text-base mb-1">
          {product.name}
        </h2>
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-orange-500 font-bold">
            ₹{Number(product?.price || 0).toFixed(2)}
          </span>
          <span className="text-sm text-yellow-600">⭐{product.rating}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 ">{product.description}</p>
        <div className="flex gap-2 mt-auto">
          <button onClick={handleViewDetails} className="flex-1 border border-orange-500 text-orange-500 text-xs py-1.5 cursor-pointer rounded-md hover:bg-orange-50 hover:scale-105 transition-transform duration-300 ease-in-out">
            View
          </button>
          <button onClick={handleCart} className="bg-orange-500 flex-1 text-white text-xs py-1.5 rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
