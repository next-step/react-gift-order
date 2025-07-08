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

  const {
    selectedCard,
    message,
    handleCardSelect,
    handleMessageChange,
    validateMessage,
    cardSelectionErrorMessage,
  } = useCardSelection(orderCardMockData);

  const {
    senderName,
    handleSenderNameChange,
    validateSenderName,
    senderNameErrorMessage,
  } = useSenderInput();

  const {
    receiverName,
    receiverPhone,
    quantity,
    handleReceiverNameChange,
    handleReceiverPhoneChange,
    handleQuantityChange,
    validateReceiverName,
    validateReceiverPhone,
    validateQuantity,
    receiverNameErrorMessage,
    receiverPhoneErrorMessage,
    quantityErrorMessage,
  } = useReceiverInput();

  const validateForms = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateMessage(message);
    validateSenderName(senderName);
    validateReceiverName(receiverName);
    validateReceiverPhone(receiverPhone);
    validateQuantity(quantity);
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
          <CardSelection
            cards={orderCardMockData}
            selectedCard={selectedCard}
            message={message}
            onSelect={handleCardSelect}
            onMessageChange={handleMessageChange}
            cardSelectionErrorMessage={cardSelectionErrorMessage}
          />
          <SenderSectionComponent
            senderName={senderName}
            handleSenderNameChange={handleSenderNameChange}
            validateSenderName={validateSenderName}
            senderNameErrorMessage={senderNameErrorMessage}
          />
          <ReceiverSectionComponent
            receiverName={receiverName}
            receiverPhone={receiverPhone}
            quantity={quantity}
            handleReceiverNameChange={handleReceiverNameChange}
            handleReceiverPhoneChange={handleReceiverPhoneChange}
            handleQuantityChange={handleQuantityChange}
            validateReceiverName={validateReceiverName}
            validateReceiverPhone={validateReceiverPhone}
            validateQuantity={validateQuantity}
            receiverNameErrorMessage={receiverNameErrorMessage}
            receiverPhoneErrorMessage={receiverPhoneErrorMessage}
            quantityErrorMessage={quantityErrorMessage}
          />
          <ProductInfo product={product} quantity={quantity} />
        </form>
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
