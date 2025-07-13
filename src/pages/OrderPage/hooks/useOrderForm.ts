import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderCardMockData } from "@/data/orderCardMockData";
import {
  messageCardSchema,
  senderSchema,
  type MessageCardFormData,
  type SenderFormData,
} from "../schemas";
import { FORM_FIELD } from "../constants/formField";
import SENDER_SECTION_CONSTANTS from "../constants/senderSection";

interface UseOrderFormProps {
  isSubmittedOnce: boolean;
}

export interface Receiver {
  name: string;
  phone: string;
  quantity: string;
}

export const useOrderForm = ({ isSubmittedOnce }: UseOrderFormProps) => {
  const [receivers, setReceivers] = useState<Receiver[]>([]);

  const {
    control: cardSelectionControl,
    trigger: cardSelectionTrigger,
    formState: { errors: cardSelectionErrors },
    setValue,
    getValues: cardSelectionGetValues,
    watch,
  } = useForm<MessageCardFormData>({
    mode: isSubmittedOnce ? "onChange" : "onSubmit",
    defaultValues: {
      messageCard: orderCardMockData[0],
      cardMessage: orderCardMockData[0].defaultTextMessage,
    },
    resolver: zodResolver(messageCardSchema),
  });

  const messageCard = watch(FORM_FIELD.MESSAGE_CARD);

  const setMessageCard = (card: (typeof orderCardMockData)[0]) => {
    setValue(FORM_FIELD.MESSAGE_CARD, card);
    setValue(FORM_FIELD.CARD_MESSAGE, card.defaultTextMessage);

    if (isSubmittedOnce) {
      cardSelectionTrigger(FORM_FIELD.CARD_MESSAGE);
    }
  };

  const {
    control: senderControl,
    trigger: senderTrigger,
    formState: { errors: senderErrors },
    getValues: senderGetValues,
  } = useForm<SenderFormData>({
    mode: isSubmittedOnce ? "onChange" : "onSubmit",
    defaultValues: {
      senderName: SENDER_SECTION_CONSTANTS.DEFAULT_SENDER_NAME,
    },
    resolver: zodResolver(senderSchema),
  });

  const validateAllForms = async () => {
    const [cardValid, senderValid] = await Promise.all([
      cardSelectionTrigger(),
      senderTrigger(),
    ]);

    return cardValid && senderValid;
  };

  const getFormValues = () => ({
    senderName: senderGetValues(FORM_FIELD.SENDER_NAME),
    cardMessage: cardSelectionGetValues(FORM_FIELD.CARD_MESSAGE),
    totalQuantity: receivers.reduce(
      (acc, cur) => acc + Number(cur.quantity),
      0
    ),
  });

  return {
    messageCard,
    setMessageCard,
    cardSelectionControl,
    cardSelectionErrors,

    senderControl,
    senderErrors,

    receivers,
    setReceivers,

    validateAllForms,
    getFormValues,
  };
};
