import { useParams } from "react-router-dom";
import { mockProduct } from "@/mocks/productData";
import { whiteSectionStyle } from "@/styles/CommonStyles";
import theme from "@/styles/theme";
import {
  titleStyle,
  cardStyle,
  imageStyle,
  nameStyle,
  brandStyle,
  priceStyle,
  priceValueStyle,
} from "./styles";
import { useEffect } from "react";
import { useOrder } from "@/contexts/OrderContext";

function ProductInfoSection() {
  const { productId } = useParams();
  const product = mockProduct.find((p) => String(p.id) === productId);

  const { setProductPrice, setTotalPrice } = useOrder();

  if (!product) return null;

  useEffect(() => {
    setProductPrice(product.price.sellingPrice);
    setTotalPrice(product.price.sellingPrice);
  }, [product.price.sellingPrice]);

  return (
    <div css={whiteSectionStyle(theme)}>
      <h3 css={titleStyle}>상품 정보</h3>
      <div css={cardStyle}>
        <img src={product.imageURL} alt={product.name} css={imageStyle} />
        <div>
          <div css={nameStyle}>{product.name}</div>
          <div css={brandStyle}>{product.brandInfo.name}</div>
          <div css={priceStyle}>
            상품가{" "}
            <span css={priceValueStyle}>
              {product.price.sellingPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoSection;
