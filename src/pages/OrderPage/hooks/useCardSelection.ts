import { useState } from "react";
import type { OrderCardType } from "@/types/OrderCardType";
import { isNotEmpty } from "@/utils/validation";
import { useInput } from "@/hooks/useInput";
import { VALIDATE_LABELS } from "../constants/validateLabels";

export function useCardSelection(initialCards: OrderCardType[]) {
  const [selectedCard, setSelectedCard] = useState<OrderCardType>(
    initialCards[0]
  );

  const messageInput = useInput({
    initialValue: initialCards[0].defaultTextMessage,
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return VALIDATE_LABELS.MESSAGE_EMPTY;
      }
    },
  });

  const handleCardSelect = (card: OrderCardType) => {
    setSelectedCard(card);
    messageInput.handleValueChange(card.defaultTextMessage);
  };

  return {
    selectedCard,
    message: messageInput.value,
    handleCardSelect,
    handleMessageChange: messageInput.handleValueChange,
    validateMessage: messageInput.validate,
    cardSelectionErrorMessage: messageInput.errorMessage,
    hasCardSelectionError: messageInput.hasError,
  };
}
