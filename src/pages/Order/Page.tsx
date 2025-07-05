import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import { orderCardMock } from "@/assets/orderCardMock";
import { useEffect, useState } from "react";
import useStringInput from "@/hooks/useStringInput";
import { rankingItemMock } from "@/assets/rankingItemMock";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATH } from "@/components/routes/Routes";
import Card from "./components/Card";
import Sender from "./components/Sender";
import Recipient from "./components/Recipient";
import Product from "./components/Product";
import useNumberInput from "@/hooks/useNumberInput";
import { getMessageError, getNameError, getPhoneError, getQuantityError } from "@/utils/errorMessage";

const Order = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = rankingItemMock.find((item) => item.id === Number(productId));
  if (!product) navigate(ROUTE_PATH.HOME);

  const [selectedCard, setSelectedCard] = useState(orderCardMock[0]);

  const messageInput = useStringInput("", getMessageError);
  const senderInput = useStringInput("", getNameError);
  const recipientNameInput = useStringInput("", getNameError);
  const recipientPhoneInput = useStringInput("", getPhoneError);
  const recipientQuantityInput = useNumberInput(1, getQuantityError);

  const totalPrice = product ? product.price.sellingPrice * recipientQuantityInput.value : 0;

  const handleOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidMessage = messageInput.validate();
    const isValidSender = senderInput.validate();
    const isValidRecipientName = recipientNameInput.validate();
    const isValidRecipientPhone = recipientPhoneInput.validate();
    const isValidRecipientCount = recipientQuantityInput.validate();

    const isValidOrder =
      isValidMessage && isValidSender && isValidRecipientName && isValidRecipientPhone && isValidRecipientCount;

    if (isValidOrder) {
      alertOrderInfo(messageInput.value, product?.name as string, recipientQuantityInput.value, senderInput.value);
      navigate(ROUTE_PATH.HOME);
    }
    console.log(recipientQuantityInput.value, recipientQuantityInput.errorMsg, recipientQuantityInput.validate());
  };

  useEffect(() => {
    messageInput.setValue(selectedCard.defaultTextMessage);
  }, [selectedCard]);
  return (
    <Container>
      <Content onSubmit={handleOrderSubmit}>
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          message={messageInput.value}
          onChangeMessage={messageInput.onChange}
          errorMsg={messageInput.errorMsg}
        />
        <Divider spacing="0.5rem" fill={false} />
        <Sender
          senderInput={senderInput.value}
          onChangeSenderInput={senderInput.onChange}
          errorMsg={senderInput.errorMsg}
        />
        <Divider spacing="0.5rem" fill={false} />
        <Recipient
          name={recipientNameInput.value}
          onChangeName={recipientNameInput.onChange}
          errorMsgName={recipientNameInput.errorMsg}
          phone={recipientPhoneInput.value}
          onChangePhone={recipientPhoneInput.onChange}
          errorMsgPhone={recipientPhoneInput.errorMsg}
          quantity={recipientQuantityInput.value}
          onChangeQuantity={recipientQuantityInput.onChange}
          errorMsgQuantity={recipientQuantityInput.errorMsg}
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
