import { useMemo, useState } from "react";
import type { OrderCardType } from "@/types/OrderCardType";
import { isNotEmpty } from "@/utils/validation";
import { useInput } from "@/hooks/useInput";

export function useCardSelection(initialCards: OrderCardType[]) {
  const [selectedCard, setSelectedCard] = useState<OrderCardType>(
    initialCards[0]
  );

  const messageInput = useInput(initialCards[0].defaultTextMessage, {
    isEmpty: (value: string) => isNotEmpty(value),
  });

  const handleCardSelect = (card: OrderCardType) => {
    setSelectedCard(card);
    messageInput.handleValueChange(card.defaultTextMessage);
  };

  const messageErrorMessage = useMemo(() => {
    if (messageInput.errors.isEmpty) {
      return "메시지를 입력해주세요.";
    }
    return null;
  }, [messageInput.errors.isEmpty]);

  return {
    selectedCard,
    message: messageInput.value,
    handleCardSelect,
    handleMessageChange: messageInput.handleValueChange,
    validateMessage: messageInput.validate,
    cardSelectionErrorMessage: messageErrorMessage,
    hasCardSelectionError: messageInput.hasError,
  };
}
