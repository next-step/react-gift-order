import { Item, ItemBrand, ItemImage, ItemName, ItemPrice } from '@/components/Common/OrderProductImage/OrderProductImage.style.ts';

export default function OrerProductImage({ image, name, brand, price }) {
  return (
    <Item>
      <ItemImage>
        <img src={image} alt='사진' />
      </ItemImage>

      <div>
        <ItemName>{name}</ItemName>
        <ItemBrand>{brand}</ItemBrand>
        <ItemPrice><span>상품가</span> {price}원</ItemPrice>
      </div>
    </Item>
  )
}
