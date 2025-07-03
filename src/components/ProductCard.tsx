import type { Product } from "../types/product.ts";

interface ProductCardProps {
  product: Product;
  rank: number;
}
const ProductCard = ({ product, rank }: ProductCardProps) => {
  const formattedPrice =
    product.price.sellingPrice.toLocaleString("ko-KR") + "원";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative transform transition-transform hover:scale-105 duration-300">
      <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
        {rank}
      </div>
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.brandInfo.name}</p>
        <p className="text-xl font-bold text-gray-900">{formattedPrice}</p>
        <div className="flex justify-between items-center mt-3">
          {product.brandInfo.imageURL && (
            <img
              src={product.brandInfo.imageURL}
              alt={product.brandInfo.name + " 로고"}
              className="w-8 h-8 object-contain"
            />
          )}
          <div className="flex items-center space-x-1">
            <span className="text-xl">🥚</span>
            <span className="text-gray-700">6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
