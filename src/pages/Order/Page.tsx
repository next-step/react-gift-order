import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import { orderCardMock } from "@/assets/orderCardMock";
import { useEffect, useState } from "react";
import useInput from "@/hooks/useInput";
import { rankingItemMock } from "@/assets/rankingItemMock";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATH } from "@/components/routes/Routes";
import Card from "./components/Card";
import Sender from "./components/Sender";
import Recipient from "./components/Recipient";
import Product from "./components/Product";

const Order = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = rankingItemMock.find((item) => item.id === Number(productId));
  if (!product) navigate(ROUTE_PATH.HOME);

  const [selectedCard, setSelectedCard] = useState(orderCardMock[0]);

  const messageInput = useInput();
  const senderInput = useInput();
  const recipientNameInput = useInput();
  const recipientPhoneInput = useInput();
  const recipientCountInput = useInput();

  const totalPrice = product ? product.price.sellingPrice * Number(recipientCountInput.value) : 0;

  useEffect(() => {
    messageInput.setValue(selectedCard.defaultTextMessage);
  }, [selectedCard]);
  return (
    <Container>
      <Content>
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          message={messageInput.value}
          onChangeMessage={messageInput.onChange}
        />
        <Divider spacing="0.5rem" fill={false} />
        <Sender senderInput={senderInput.value} onChangeSenderInput={senderInput.onChange} />
        <Divider spacing="0.5rem" fill={false} />
        <Recipient
          name={recipientNameInput.value}
          onChangeName={recipientNameInput.onChange}
          phone={recipientPhoneInput.value}
          onChangePhone={recipientPhoneInput.onChange}
          count={recipientCountInput.value}
          onChangeCount={recipientCountInput.onChange}
        />
        <Divider spacing="0.5rem" fill={false} />
        {product && <Product product={product} />}
        <Divider spacing="3.125rem" />
        <OrderBtn>{totalPrice}원 주문하기</OrderBtn>
      </Content>
    </Container>
  );
};

export default Order;

const Content = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const OrderBtn = styled.button`
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  font: ${({ theme }) => theme.typography.label2Bold};
  border: none;
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 999;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.kakaoYellowHover};
  }
  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.color.kakaoYellowActive};
  }
`;
