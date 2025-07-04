import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import styled from "@emotion/styled";
import CardSelection from "./CardSelection/CardSelection";
import { useCardSelection } from "./hooks/useCardSelection";

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: 16px;
`;

function OrderPage() {
  const { selectedCard, message, handleCardSelect, handleMessageChange } =
    useCardSelection(orderCardMockData);

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
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
