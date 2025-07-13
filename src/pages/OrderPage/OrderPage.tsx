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
import { useState } from "react";
import { useOrderForm } from "./hooks/useOrderForm";
import { ORDER_MESSAGES } from "./constants/alert";

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: ${({ theme }) => theme.spacing[2]};
`;

function OrderPage() {
  const navigate = useNavigate();
  const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);
  const product = useProductInfo();

  const {
    messageCard,
    setMessageCard,
    cardSelectionControl,
    cardSelectionErrors,

    senderControl,
    senderErrors,

    receivers,
    setReceivers,

    validateAllForms,
    getFormValues,
  } = useOrderForm({ isSubmittedOnce });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await validateAllForms();

    if (!isValid) {
      setIsSubmittedOnce(true);
    }

    if (isValid) {
      const formValues = getFormValues();
      alert(
        ORDER_MESSAGES.ORDER_COMPLETE_TEMPLATE({
          productName: product?.name || "",
          totalQuantity: formValues.totalQuantity,
          senderName: formValues.senderName,
          cardMessage: formValues.cardMessage,
        })
      );

      navigate(ROUTES.HOME);
      return;
    }
  };

  if (!product) {
    navigate(ROUTES.NOT_FOUND);
    return;
  }

  const totalQuantity = receivers.reduce(
    (acc, cur) => acc + Number(cur.quantity),
    0
  );

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
          <ProductInfo product={product} quantity={totalQuantity.toString()} />
        </OrderPageContainer>
      </form>
    </Layout>
  );
}

export default OrderPage;
