import { cardTemplate } from "@/__mock__";
import { useOrderContext } from "@/hooks/order/useOrderContext";
import type { CardTemplateType } from "@/types";
import { useEffect } from "react";

export const useCardTemplate = () => {
  const { order, setOrder } = useOrderContext();

  useEffect(() => {
    if (!order.cardTemplate) {
      const defaultTemplate = cardTemplate[0];
      setOrder(prev => ({
        ...prev,
        cardTemplate: defaultTemplate,
        message: defaultTemplate?.defaultTextMessage,
      }));
    }
  }, [order.cardTemplate, setOrder]);

  const setCardTemplate = (template: CardTemplateType) => {
    setOrder(prev => ({
      ...prev,
      cardTemplate: template,
      message: template?.defaultTextMessage,
    }));
  };

  return {
    cardTemplate: order.cardTemplate,
    setCardTemplate,
  };
};
