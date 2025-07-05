import { cardTemplate } from "@/__mock__";
import { useOrder } from "@/contexts/order/OrderContext";
import type { CardTemplateType } from "@/types";
import { useEffect } from "react";

export const useCardTemplate = () => {
  const { order, setOrder } = useOrder();

  useEffect(() => {
    if (!order.cardTemplate) {
      const defaultTemplate = cardTemplate[0];
      setOrder(prev => ({
        ...prev,
        cardTemplate: defaultTemplate,
        message: defaultTemplate?.defaultTextMessage,
      }));
    }
  }, []);

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
