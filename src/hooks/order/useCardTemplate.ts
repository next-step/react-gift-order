import { cardTemplate } from "@/__mock__";
import { useOrderForm, useOrderState } from "@/contexts/order";
import type { CardTemplateType } from "@/types";
import { useEffect } from "react";

export const useCardTemplate = () => {
  const { order } = useOrderState();
  const { setValue } = useOrderForm();

  useEffect(() => {
    if (!order.cardTemplate) {
      const defaultTemplate = cardTemplate[0];

      setValue("cardTemplate", defaultTemplate);
      setValue("message", defaultTemplate?.defaultTextMessage || "");
    }
  }, [setValue, order.cardTemplate]);

  const setCardTemplate = (template: CardTemplateType) => {
    setValue("cardTemplate", template);
    setValue("message", template?.defaultTextMessage || "");
  };

  return {
    cardTemplate: order.cardTemplate,
    setCardTemplate,
  };
};
