import type { mockItemType } from '@/mocks/mockItem';
import {
  ItemContainerStyle,
  ItemImageWrapper,
  ItemBrand,
  ItemImg,
  ItemIndex,
  ItemName,
  ItemPrice,
} from '@/styles/Item/Item.styles';

type ItemProps = {
  index: number;
  itemData: mockItemType;
};

function Item({ index, itemData }: ItemProps) {
  return (
    <ItemContainerStyle>
      <ItemImageWrapper>
        <ItemIndex index={index}>{index + 1}</ItemIndex>
        <ItemImg src={itemData.imageURL} alt={itemData.name} />
      </ItemImageWrapper>
      <ItemName>{itemData.brandInfo.name}</ItemName>
      <ItemBrand>브랜드: {itemData.brandInfo.name}</ItemBrand>
      <ItemPrice>{itemData.price.sellingPrice}</ItemPrice>
    </ItemContainerStyle>
  );
}

export default Item;
