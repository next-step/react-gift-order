import styled from '@emotion/styled';
import ProductCard, { type Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  showMore: boolean;
}

const GridContainer = styled.div<{ showMore: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${(props) =>
    props.showMore ? 'repeat(7, 1fr)' : 'repeat(2, 1fr)'};
  gap: ${(props) => props.theme.spacing.spacing4};
  margin-bottom: ${(props) => props.theme.spacing.spacing4};
`;

const ProductGrid = ({ products, showMore }: ProductGridProps) => {
  const displayProducts = showMore
    ? products.slice(0, 21)
    : products.slice(0, 6);

  return (
    <GridContainer showMore={showMore}>
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
