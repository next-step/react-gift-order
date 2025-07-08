import TheHeader from "@/components/layout/TheHeader";
import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ROUTE_PATH } from "@/routes/paths";
import { gifts } from "@/data/gift";
import { cards } from "@/data/card";
import type { Card } from "@/types/card";
import {
  checkNameError,
  checkCountError,
  checkPhoneError,
  checkMessageError,
} from "@/utils/validation";
import styled from "@emotion/styled";
import CardSection from "@/components/order/CardSection";
import SendSection from "@/components/order/SendSection";
import ReceiverSection from "@/components/order/ReceiverSection";
import GiftInformationSection from "@/components/order/GiftInformationSection";
import type { Gift } from "@/types/gift";
import useOrderInput from "@/hooks/useOrderInput";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);
  const messageInput = useOrderInput(checkMessageError);
  const senderInput = useOrderInput(checkNameError);
  const receiverInput = useOrderInput(checkNameError);
  const phoneInput = useOrderInput(checkPhoneError);
  const countInput = useOrderInput(checkCountError, "1");

  useEffect(() => {
    messageInput.setValue(selectedCard.defaultTextMessage);
  }, [selectedCard]);

  useEffect(() => {
    const sessionUserInfo = sessionStorage.getItem("kakaotech/userInfo");
    if (!sessionUserInfo) {
      navigate(`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`, {
        replace: true,
      });
    }
  }, [location.pathname, navigate]);

  const { id } = useParams<{ id: string }>();
  const gift = gifts.find(gift => gift.id.toString() === id) as Gift;

  const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageError = messageInput.validate();
    const senderError = senderInput.validate();
    const receiverError = receiverInput.validate();
    const phoneError = phoneInput.validate();
    const countError = countInput.validate();
    if (
      messageError ||
      senderError ||
      receiverError ||
      phoneError ||
      countError
    ) {
      return;
    }

    alert(
      [
        "주문이 완료되었습니다.",
        `상품명: ${gift.name}`,
        `구매 수량: ${countInput.value}`,
        `보낸 사람: ${senderInput.value}`,
        `메시지: ${messageInput.value}`,
      ].join("\n"),
    );
    navigate(ROUTE_PATH.HOME, { replace: true });
  };

  return (
    <>
      <TheHeader />
      <Main>
        <Form onSubmit={handleOrder}>
          <CardSection
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            messageInput={messageInput}
          />
          <SendSection senderInput={senderInput} />
          <ReceiverSection
            receiverInput={receiverInput}
            phoneInput={phoneInput}
            countInput={countInput}
          />
          <GiftInformationSection selectedGift={gift} />
          <Button>
            {gift.price.sellingPrice * Number(countInput.value)}원 주문하기
          </Button>
        </Form>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.gray200};
  padding-bottom: 3.125rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const Button = styled.button`
  z-index: 100;
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.spacing0} auto;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;
