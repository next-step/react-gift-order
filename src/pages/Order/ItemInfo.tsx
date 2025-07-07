import {
  ItemInfoContainer,
  ItemInfoTitle,
  ItemContainer,
  ItemImg,
  DetailContainer,
  DeatilTitle,
  DetailCompany,
  DetailPrice,
  DetailPriceContainer,
} from '@/styles/Order/ItemInfo.styles';
import type { mockItemType } from '@/mocks/mockItem';

type ItemInfoProps = {
  item: mockItemType;
};
function ItemInfo({ item }: ItemInfoProps) {
  return (
    <ItemInfoContainer>
      <ItemInfoTitle>상품 정보</ItemInfoTitle>
      <ItemContainer>
        <ItemImg src={item.imageURL} />
        <DetailContainer>
          <DeatilTitle>{item.name}</DeatilTitle>
          <DetailCompany>{item.brandInfo.name}</DetailCompany>
          <DetailPriceContainer>
            <p>상품가</p>
            <DetailPrice>{item.price.basicPrice}</DetailPrice>
          </DetailPriceContainer>
        </DetailContainer>
      </ItemContainer>
    </ItemInfoContainer>
  );
}

export default ItemInfo;
