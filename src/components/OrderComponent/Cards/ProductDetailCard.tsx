interface ProductDetailProps {
  imageUrl: string;
  productName: string;
  brand: string;
  price: number;
}

const ProductDetailCard = ({
  imageUrl,
  productName,
  brand,
  price,
}: ProductDetailProps) => {
  return (
    <div className="flex items-center p-4 bg-white w-full  mx-auto my-4">
      <div className="w-24 h-24 flex-shrink-0 mr-4">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {productName}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{brand}</p>
        <p className="text-xl font-bold text-gray-900">
          <span className="text-base font-normal">상품가</span>
          {price.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
