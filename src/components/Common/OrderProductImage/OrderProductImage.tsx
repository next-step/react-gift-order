import {
  ItemBrand,
  ItemImage,
  ItemImageWrapper,
  ItemName,
  ItemPrice,
} from '@/components/Common/OrderProductImage/OrderProductImage.style.ts';

export default function OrderProductImage({ image, name, brand, price }) {
  return (
    <ItemImageWrapper>
      <ItemImage>
        <img src={image} alt={image.name} />
      </ItemImage>

      <div>
        <ItemName>{name}</ItemName>
        <ItemBrand>{brand}</ItemBrand>
        <ItemPrice><span>상품가</span> {price}원</ItemPrice>
      </div>
    </ItemImageWrapper>
  )
}
