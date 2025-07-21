import ProductCard from "../common/ProductCard";
import { type Product } from "../../api/product";

interface RankingProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  isNumVisibleOption: boolean;
  onProductClick: (productId: number) => void;
}

export const RankingProductList = ({
  products,
  loading,
  error,
  onProductClick,
  isNumVisibleOption,
}: RankingProductListProps) => {
  if (loading) {
    return <p className="text-center text-gray-600">랭킹 로딩 중...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">에러: {error}</p>;
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-600">
        해당 조건의 랭킹 상품이 없습니다.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          ranking={index + 1}
          product={product}
          onClick={onProductClick}
          isNumVisible={isNumVisibleOption}
        />
      ))}
    </div>
  );
};

export default RankingProductList;
