import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import { orderCardMock } from "@/assets/orderCardMock";
import { useEffect, useState } from "react";
import { rankingItemMock } from "@/assets/rankingItemMock";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATH } from "@/components/routes/routePath";
import Card from "./components/Card";
import Sender from "./components/Sender";
import Recipient from "./components/Recipient";
import Product from "./components/Product";
import useOrder from "@/hooks/useOrder";

const Order = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = rankingItemMock.find((item) => item.id === Number(productId));
  useEffect(() => {
    if (!product) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [product, navigate]);

  const [selectedCard, setSelectedCard] = useState(orderCardMock[0]);

  const { formData, onChangeOrder, setOrderMessage, errorMsg, checkValidOrder } = useOrder();

  const totalPrice = product ? product.price.sellingPrice * formData.recipients.quantity : 0;

  const handleOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidOrder = checkValidOrder();

    if (isValidOrder) {
      alertOrderInfo(formData.message, product?.name as string, formData.recipients.quantity, formData.sender);
      navigate(ROUTE_PATH.HOME);
    }
  };

  useEffect(() => {
    setOrderMessage(selectedCard.defaultTextMessage);
  }, [selectedCard]);
  return (
    <Container>
      <Content onSubmit={handleOrderSubmit}>
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          message={formData.message}
          onChangeMessage={onChangeOrder}
          errorMsg={errorMsg.message}
        />
        <Divider spacing="0.5rem" fill={false} />
        <Sender senderInput={formData.sender} onChangeSenderInput={onChangeOrder} errorMsg={errorMsg.sender} />
        <Divider spacing="0.5rem" fill={false} />
        <Recipient
          name={formData.recipients.name}
          onChangeName={onChangeOrder}
          errorMsgName={errorMsg.recipients.name}
          phone={formData.recipients.phone}
          onChangePhone={onChangeOrder}
          errorMsgPhone={errorMsg.recipients.phone}
          quantity={formData.recipients.quantity}
          onChangeQuantity={onChangeOrder}
          errorMsgQuantity={errorMsg.recipients.quantity}
        />
        <Divider spacing="0.5rem" fill={false} />
        {product && <Product product={product} />}
        <Divider spacing="3.125rem" />
        <OrderBtn type="submit">{totalPrice}원 주문하기</OrderBtn>
      </Content>
    </Container>
  );
};

export default Order;

const alertOrderInfo = (message: string, productName: string, quantity: number, sender: string) => {
  const msg = `
    주문이 완료되었습니다.
    상품명: ${productName}
    구매 수량: ${quantity}
    발신자 이름: ${sender}
    메시지: ${message}
  `;
  alert(msg);
};

const Content = styled.form`
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
