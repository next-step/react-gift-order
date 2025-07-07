import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderContainer } from '@/styles/Order/Order.styles';
import {
  CardContainer,
  ThumbContainer,
  ThumbImgWrapper,
  ThumbImg,
  Image,
  InputTextArea,
} from '@/styles/Order/Thumbnail.styles';
import {
  SenderContainer,
  SenderTitle,
  SenderInput,
  SenderInfo,
} from '@/styles/Order/Sender.styles';
import {
  RecieverContainer,
  RecieverTitle,
  InputContainer,
  RecieverInputLabel,
  RecieverInput,
} from '@/styles/Order/Reciever.styles';
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
import { orders } from '@/mocks/mockorder';
import type { mockItemType } from '@/mocks/mockItem';

function Order() {
  const location = useLocation();
  const item: mockItemType = location.state?.item;
  const [currentId, setCurrentId] = useState(orders[0].id);
  const [text, setText] = useState<string>(orders[0].defaultTextMessage);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  function handleThumbClick(id: number) {
    setCurrentId(id);
  }

  const currentOrder = orders.find((order) => order.id === currentId);
  console.log(item);
  return (
    <OrderContainer>
      <CardContainer>
        <ThumbContainer>
          {orders.map((order) => (
            <ThumbImgWrapper key={order.id} clicked={currentId == order.id}>
              <ThumbImg
                key={order.id}
                src={order.thumbUrl}
                alt="thumbnail"
                onClick={() => handleThumbClick(order.id)}
              />
            </ThumbImgWrapper>
          ))}
        </ThumbContainer>
        {currentOrder && <Image src={currentOrder.imageUrl} alt="image" />}
        <InputTextArea value={text} onChange={handleChange} />
      </CardContainer>
      <SenderContainer>
        <SenderTitle>보내는 사람</SenderTitle>
        <SenderInput placeholder="이름 입력" />
        <SenderInfo>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SenderInfo>
      </SenderContainer>
      <RecieverContainer>
        <RecieverTitle>받는 사람</RecieverTitle>
        <InputContainer>
          <RecieverInputLabel>이름</RecieverInputLabel>
          <RecieverInput placeholder="이름을 입력하세요." />
        </InputContainer>
        <InputContainer>
          <RecieverInputLabel>전화번호</RecieverInputLabel>
          <RecieverInput placeholder="전화번호를 입력하세요." />
        </InputContainer>
        <InputContainer>
          <RecieverInputLabel>수량</RecieverInputLabel>
          <RecieverInput type="number" />
        </InputContainer>
      </RecieverContainer>
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
      <button></button>
    </OrderContainer>
  );
}

export default Order;
