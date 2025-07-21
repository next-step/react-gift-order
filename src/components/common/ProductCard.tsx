import NumberBox from "./NumberBox";
import { type Product } from "../../api/product";

interface ProductCardProps {
  ranking: number;
  product: Product;
  isNumVisible: boolean;
  onClick: (productId: number) => void;
}

const ProductCard = ({
  ranking,
  product,
  onClick,
  isNumVisible,
}: ProductCardProps) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => onClick(product.id)}
    >
      <div className="relative w-48 h-48 bg-white rounded-lg overflow-hidden shadow-md">
        <div className="absolute top-2 left-2 z-10">
          <NumberBox ranking={ranking} isVisible={isNumVisible} />
        </div>
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="font-semibold text-lg mt-2 truncate w-48 text-center">
        {product.name}
      </p>
      <p className="text-gray-600 text-sm">
        {product.price.sellingPrice.toLocaleString()}원
      </p>
    </div>
  );
};

export default ProductCard;
