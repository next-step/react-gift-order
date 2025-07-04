import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import {
  CardPreviewContainer,
  CardSelectorContainer,
  MainCardImage,
  MessageTextArea,
  ThumbnailImage,
  ThumbnailItem,
  ThumbnailList,
} from "./OrderPage.styles";
import { useState } from "react";
import type { OrderCardType } from "@/types/OrderCardType";
import styled from "@emotion/styled";

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: 16px;
`;

function OrderPage() {
  const [selectedCard, setSelectedCard] = useState<OrderCardType>(
    orderCardMockData[0]
  );
  const [message, setMessage] = useState(selectedCard.defaultTextMessage);

  const handleCardSelect = (card: OrderCardType) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <Layout>
      <OrderPageContainer>
        <section>
          <CardSelectorContainer>
            <ThumbnailList>
              {orderCardMockData.map((card) => (
                <ThumbnailItem
                  key={card.id}
                  isSelected={selectedCard.id === card.id}
                  onClick={() => handleCardSelect(card)}
                >
                  <ThumbnailImage src={card.thumbUrl} alt={`card-${card.id}`} />
                </ThumbnailItem>
              ))}
            </ThumbnailList>
          </CardSelectorContainer>
          <CardPreviewContainer>
            <MainCardImage src={selectedCard.imageUrl} alt="selected-card" />
            <MessageTextArea value={message} onChange={handleMessageChange} />
          </CardPreviewContainer>
        </section>
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
