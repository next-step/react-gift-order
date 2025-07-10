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

    if (isSubmittedOnce) {
      const isValid = await validateAllForms();

      if (isValid) {
        const formValues = getFormValues();
        alert(
          `주문이 완료되었습니다.
          상품명: ${product?.name}
          구매 수량: ${formValues.totalQuantity}
          발신자 이름: ${formValues.senderName}
          메시지: ${formValues.cardMessage}`
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
