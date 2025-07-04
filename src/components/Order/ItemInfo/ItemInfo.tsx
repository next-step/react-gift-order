import {
  ItemTitle,
  ItemWrapper,
} from '@/components/Order/ItemInfo/ItemInfo.style.ts';
import Item from "@/components/Common/OrderProductImage/OrerProductImage.tsx"

export default function ItemInfo({ id }) {
  const list = JSON.parse(localStorage.getItem('expandedList') || '[]');
  const data = list[id - 1];

  return (
    <ItemWrapper>
      <ItemTitle>상품 정보</ItemTitle>
      <Item
        image={data.imageURL}
        name={data.name}
        brand={data.brandInfo.name}
        price={data.price.sellingPrice}
      />
    </ItemWrapper>
  )
}
