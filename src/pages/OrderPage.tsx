import TheHeader from "@/components/layout/TheHeader";
import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ROUTE_PATH } from "@/routes/paths";
import { gifts } from "@/data/gift";
import { cards } from "@/data/card";
import type { Card } from "@/types/card";
import useFormInput from "@/hooks/useFormInput";
import {
  checkNameError,
  checkCountError,
  checkPhoneError,
} from "@/utils/validation";
import styled from "@emotion/styled";
import CardSection from "@/components/order/CardSection";
import SendSection from "@/components/order/SendSection";
import ReceiverSection from "@/components/order/ReceiverSection";
import GiftInformationSection from "@/components/order/GiftInformationSection";
import type { Gift } from "@/types/gift";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);
  const [cardMessage, setCardMessage] = useState<string>(
    selectedCard.defaultTextMessage,
  );
  const senderInput = useFormInput(checkNameError);
  const receiverInput = useFormInput(checkNameError);
  const phoneInput = useFormInput(checkPhoneError);
  const countInput = useFormInput(checkCountError, "1");

  useEffect(() => {
    setCardMessage(selectedCard.defaultTextMessage);
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
    const senderError = senderInput.validate();
    const receiverError = receiverInput.validate();
    const phoneError = phoneInput.validate();
    const countError = countInput.validate();
    if (senderError || receiverError || phoneError || countError) {
      return;
    }

    alert(
      [
        "주문이 완료되었습니다.",
        `상품명: ${gift.name}`,
        `구매 수량: ${countInput.value}`,
        `보낸 사람: ${senderInput.value}`,
        `메시지: ${cardMessage}`,
      ].join("\n"),
    );
    navigate(ROUTE_PATH.HOME, { replace: true });
  };

  return (
    <>
      <TheHeader />
      <Main>
        <form onSubmit={handleOrder}>
          <CardSection
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            cardMessage={cardMessage}
            setCardMessage={setCardMessage}
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
        </form>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.gray200};
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding-bottom: 3.125rem;
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
