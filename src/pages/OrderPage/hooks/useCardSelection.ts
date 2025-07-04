import { useState } from "react";
import type { OrderCardType } from "@/types/OrderCardType";

export function useCardSelection(initialCards: OrderCardType[]) {
  const [selectedCard, setSelectedCard] = useState<OrderCardType>(
    initialCards[0]
  );
  const [message, setMessage] = useState(initialCards[0].defaultTextMessage);

  const handleCardSelect = (card: OrderCardType) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return {
    selectedCard,
    message,
    handleCardSelect,
    handleMessageChange,
  };
}
