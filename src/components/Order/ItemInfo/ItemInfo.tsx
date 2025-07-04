import {
  Item,
  ItemBrand,
  ItemImage,
  ItemName, ItemPrice,
  ItemTitle,
  ItemWrapper,
} from '@/components/Order/ItemInfo/ItemInfo.style.ts';

export default function ItemInfo({ id }) {
  const list = JSON.parse(localStorage.getItem('expandedList') || '[]');
  const data = list[id - 1];

  return (
    <ItemWrapper>
      <ItemTitle>상품 정보</ItemTitle>
      <Item>
        <ItemImage>
          <img src={data.imageURL} alt='사진' />
        </ItemImage>

        <div>
          <ItemName>{data.name}</ItemName>
          <ItemBrand>{data.brandInfo.name}</ItemBrand>
          <ItemPrice><span>상품가</span> {data.price.sellingPrice}원</ItemPrice>
        </div>
      </Item>
    </ItemWrapper>
  )
}
