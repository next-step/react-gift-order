import { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { RecieverContainer } from '@/styles/Order/Reciever.styles';
import { orders } from '@/mocks/mockorder';

function Order() {
  const { orderId } = useParams();
  const [currentId, setCurrentId] = useState(orders[0].id);
  const [text, setText] = useState<string>(orders[0].defaultTextMessage);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  function handleThumbClick(id: number) {
    setCurrentId(id);
  }

  const currentOrder = orders.find((order) => order.id === currentId);

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
        받는 사람
        <div>
          <div>이름</div>
          <div>인풋</div>
        </div>
        <div>
          <div>전화번호</div>
          <div>input</div>
        </div>
        <div>
          <div>수량</div>
          <div>input</div>
        </div>
      </RecieverContainer>
      <div>
        상품정보
        <div>
          회색 보더
          <div>image</div>
          <div>
            <div>이름</div>
            <div>회사</div>
            <div>상품가</div>
          </div>
        </div>
      </div>
      {orderId}
    </OrderContainer>
  );
}

export default Order;
