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

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: ${({ theme }) => theme.spacing[2]};
`;

function OrderPage() {
  const {
    selectedCard,
    message,
    handleCardSelect,
    handleMessageChange,
    validateMessage,
    cardSelectionErrorMessage,
    hasCardSelectionError,
  } = useCardSelection(orderCardMockData);

  const {
    senderName,
    handleSenderNameChange,
    validateSenderName,
    senderNameErrorMessage,
    hasSenderNameError,
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
    hasReceiverNameError,
    hasReceiverPhoneError,
    hasQuantityError,
  } = useReceiverInput();

  const product = useProductInfo();

  const validateForms = () => {
    validateMessage(message);
    validateSenderName(senderName);
    validateReceiverName(receiverName);
    validateReceiverPhone(receiverPhone);
    validateQuantity(quantity);
  };

  // TODO: 유효성 검사를 어떻게 하면 좋을지
  if (!product) {
    return;
  }

  return (
    <Layout>
      <OrderPageContainer>
        <CardSelection
          cards={orderCardMockData}
          selectedCard={selectedCard}
          message={message}
          onSelect={handleCardSelect}
          onMessageChange={handleMessageChange}
          hasCardSelectionError={hasCardSelectionError}
          cardSelectionErrorMessage={cardSelectionErrorMessage}
        />
        <SenderSectionComponent
          senderName={senderName}
          handleSenderNameChange={handleSenderNameChange}
          validateSenderName={validateSenderName}
          senderNameErrorMessage={senderNameErrorMessage}
          hasSenderNameError={hasSenderNameError}
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
          hasReceiverNameError={hasReceiverNameError}
          hasReceiverPhoneError={hasReceiverPhoneError}
          hasQuantityError={hasQuantityError}
        />
        <ProductInfo
          product={product}
          quantity={quantity}
          validateForms={validateForms}
        />
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
