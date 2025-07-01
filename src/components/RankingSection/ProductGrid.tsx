import CardGrid from '@/components/common/CardGrid';
import ProductCard from '@/components/RankingSection/ProductCard';
import type { Product } from '@/types/product';

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <CardGrid columns={3}>
      {products.map((item, index) => (
        <ProductCard key={item.id} item={item} rank={index + 1} />
      ))}
    </CardGrid>
  );
};

export default ProductGrid;
