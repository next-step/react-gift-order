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
  const { selectedCard, message, handleCardSelect, handleMessageChange } =
    useCardSelection(orderCardMockData);

  const { senderName, handleSenderNameChange } = useSenderInput();

  const {
    receiverName,
    receiverPhone,
    quantity,
    handleReceiverNameChange,
    handleReceiverPhoneChange,
    handleQuantityChange,
  } = useReceiverInput();

  const product = useProductInfo();

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
        />
        <SenderSectionComponent
          senderName={senderName}
          handleSenderNameChange={handleSenderNameChange}
        />
        <ReceiverSectionComponent
          receiverName={receiverName}
          receiverPhone={receiverPhone}
          quantity={quantity}
          handleReceiverNameChange={handleReceiverNameChange}
          handleReceiverPhoneChange={handleReceiverPhoneChange}
          handleQuantityChange={handleQuantityChange}
        />
        <ProductInfo product={product} quantity={quantity} />
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
