import ProductDetail from "./Cards/ProductDetailCard";

interface ProductDetailProps {
  imageUrl: string;
  productName: string;
  brand: string;
  price: number;
}

const ProductInfoSection = ({
  imageUrl,
  productName,
  brand,
  price,
}: ProductDetailProps) => {
  return (
    <ProductDetail
      imageUrl={imageUrl}
      productName={productName}
      brand={brand}
      price={price}
    />
  );
};

export default ProductInfoSection;
