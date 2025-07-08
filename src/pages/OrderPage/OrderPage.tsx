import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import styled from "@emotion/styled";
import CardSelection from "./components/CardSelection/CardSelection";
import { useCardSelection } from "./hooks/useCardSelection";
import SenderSectionComponent from "./components/SenderSection/SenderSection";
import { useSenderInput } from "./hooks/useSenderInput";
import ReceiverSectionComponent from "./components/ReceiverSection/ReceiverSection";
import { useReceiverInput } from "./hooks/useReceiverInput";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { useProductInfo } from "./hooks/useProductInfo";
import { ROUTES } from "@/constants/routes";
import { useNavigate } from "react-router-dom";

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: ${({ theme }) => theme.spacing[2]};
`;

function OrderPage() {
  const navigate = useNavigate();

  const cardSelection = useCardSelection(orderCardMockData);
  const senderInput = useSenderInput();
  const receiverInput = useReceiverInput();

  const validateForms = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    cardSelection.validateMessage(cardSelection.message);
    senderInput.onValidateSenderName(senderInput.senderName);
    receiverInput.onValidateReceiverName(receiverInput.receiverName);
    receiverInput.onValidateReceiverPhone(receiverInput.receiverPhone);
    receiverInput.onValidateQuantity(receiverInput.quantity);
  };

  const product = useProductInfo();

  if (!product) {
    navigate(ROUTES.NOT_FOUND);
    return;
  }

  return (
    <Layout>
      <OrderPageContainer>
        <form onSubmit={validateForms}>
          <CardSelection cards={orderCardMockData} {...cardSelection} />
          <SenderSectionComponent {...senderInput} />
          <ReceiverSectionComponent {...receiverInput} />
          <ProductInfo product={product} quantity={receiverInput.quantity} />
        </form>
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
