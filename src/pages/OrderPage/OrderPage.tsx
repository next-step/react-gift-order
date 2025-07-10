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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { VALIDATE_LABELS } from "./constants/validateLabels";

export interface SenderFormData {
  senderName: string;
}

export interface CardSelectionFormData {
  cardMessage: string;
}

export interface Receiver {
  name: string;
  phone: string;
  quantity: string;
}

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const messageCardSchema = z.object({
  cardMessage: z.string().nonempty(VALIDATE_LABELS.MESSAGE_EMPTY),
});

const senderSchema = z.object({
  senderName: z.string().nonempty(VALIDATE_LABELS.NAME_EMPTY),
});

function OrderPage() {
  const navigate = useNavigate();

  const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);

  const [messageCard, setMessageCard] = useState(orderCardMockData[0]);

  const {
    control: cardSelectionControl,
    trigger: cardSelectionTrigger,
    formState: { errors: cardSelectionErrors },
    setValue,
    getValues: cardSelectionGetValues,
  } = useForm<CardSelectionFormData>({
    mode: isSubmittedOnce ? "onChange" : "onSubmit",
    defaultValues: {
      cardMessage: messageCard.defaultTextMessage,
    },
    resolver: zodResolver(messageCardSchema),
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
    getValues: senderGetValues,
  } = useForm<SenderFormData>({
    mode: isSubmittedOnce ? "onChange" : "onSubmit",
    defaultValues: {
      senderName: "",
    },
    resolver: zodResolver(senderSchema),
  });

  const [receivers, setReceivers] = useState<Receiver[]>([]);

  const product = useProductInfo();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmittedOnce) {
      const [cardValid, senderValid] = await Promise.all([
        cardSelectionTrigger(),
        senderTrigger(),
      ]);

      if (cardValid && senderValid) {
        alert(
          `주문이 완료되었습니다.
          상품명: ${product?.name}
          구매 수량: ${receivers.reduce((acc, cur) => acc + Number(cur.quantity), 0)}
          발신자 이름: ${senderGetValues("senderName")}
          메시지: ${cardSelectionGetValues("cardMessage")}`
        );
        navigate(ROUTES.HOME);
        return;
      }

      return;
    }

    setIsSubmittedOnce(true);
  };

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
          <ReceiverSectionComponent
            receivers={receivers}
            setReceivers={setReceivers}
          />
          <ProductInfo
            product={product}
            quantity={receivers
              .reduce((acc, cur) => acc + Number(cur.quantity), 0)
              .toString()}
          />
        </OrderPageContainer>
      </form>
    </Layout>
  );
}

export default OrderPage;
