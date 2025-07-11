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
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginInfoContext } from '@/contexts/LoginInfoContext';
// import useLoginForm from '@/hooks/useLoginForm';

type ItemProps = {
  index: number;
  itemData: mockItemType;
};

function Item({ index, itemData }: ItemProps) {
  const navigate = useNavigate();
  const { loginInfo } = useContext(LoginInfoContext);
  // const { id } = useLoginForm();
  function handleItemClick(itemId: number) {
    // if (id == '') navigate('/login');
    // 이렇게 하니까 로그인한 후 Item을 눌러도 다시 로그인 화면으로 넘어가던데 이유를 모르겠습니다.
    if (!loginInfo) {
      navigate('/login');
    } else {
      navigate(`/order/${itemId}`, { state: { item: itemData } });
    }
  }

  return (
    <ItemContainerStyle onClick={() => handleItemClick(index)}>
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
