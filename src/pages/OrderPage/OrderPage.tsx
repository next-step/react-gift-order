import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import styled from "@emotion/styled";
import CardSelection from "./components/CardSelection/CardSelection";
import SenderSectionComponent from "./components/SenderSection/SenderSection";
import ReceiverSectionComponent from "./components/ReceiverSection/ReceiverSection";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { useProductInfo } from "./hooks/useProductInfo";
import { ROUTES } from "@/constants/routes";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export interface SenderFormData {
  senderName: string;
}

export interface CardSelectionFormData {
  cardMessage: string;
}

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: ${({ theme }) => theme.spacing[2]};
`;

function OrderPage() {
  const navigate = useNavigate();

  const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);

  const [messageCard, setMessageCard] = useState(orderCardMockData[0]);

  const {
    control: cardSelectionControl,
    trigger: cardSelectionTrigger,
    formState: { errors: cardSelectionErrors },
    setValue,
  } = useForm<CardSelectionFormData>({
    mode: isSubmittedOnce ? "onChange" : "onSubmit",
    defaultValues: {
      cardMessage: messageCard.defaultTextMessage,
    },
  });

  useEffect(() => {
    const selectedCard = orderCardMockData.find(
      (card) => card.id === messageCard.id
    );

    if (selectedCard) {
      setValue("cardMessage", selectedCard.defaultTextMessage);

      if (isSubmittedOnce) {
        cardSelectionTrigger("cardMessage");
      }
    }
  }, [messageCard, setValue, cardSelectionTrigger, isSubmittedOnce]);

  const {
    control: senderControl,
    trigger: senderTrigger,
    formState: { errors: senderErrors },
  } = useForm<SenderFormData>({
    mode: isSubmittedOnce ? "onChange" : "onSubmit",
    defaultValues: {
      senderName: "",
    },
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmittedOnce) {
      const [cardValid, senderValid] = await Promise.all([
        cardSelectionTrigger(),
        senderTrigger(),
      ]);

      if (cardValid && senderValid) {
        alert("주문 완료");
        navigate(ROUTES.HOME);
        return;
      }

      return;
    }

    setIsSubmittedOnce(true);
  };

  const product = useProductInfo();

  if (!product) {
    navigate(ROUTES.NOT_FOUND);
    return;
  }

  return (
    <Layout>
      <form onSubmit={onSubmitHandler}>
        <OrderPageContainer>
          <CardSelection
            cards={orderCardMockData}
            control={cardSelectionControl}
            errors={cardSelectionErrors}
            messageCard={messageCard}
            setMessageCard={setMessageCard}
          />
          <SenderSectionComponent
            control={senderControl}
            errors={senderErrors}
          />
          <ReceiverSectionComponent />
          <ProductInfo product={product} quantity="1" />
        </OrderPageContainer>
      </form>
    </Layout>
  );
}

export default OrderPage;
