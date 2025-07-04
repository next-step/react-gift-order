import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import styled from "@emotion/styled";
import CardSelection from "./components/CardSelection/CardSelection";
import { useCardSelection } from "./hooks/useCardSelection";
import SenderSection from "./components/SenderSection/SenderSection";
import { useSenderInput } from "./hooks/useSenderInput";

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
        <SenderSection
          senderName={senderName}
          handleSenderNameChange={handleSenderNameChange}
        />
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
