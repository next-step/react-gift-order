import { ORDER_ERROR_MESSAGE, PHONE_REGEX } from "@/constants";
import type { CardTemplateType, Order, ProductType } from "@/types";

import type { ValidationErrors, ValidationRulesMap } from "@/utils/type";

type OrderValidationRules = ValidationRulesMap<Order>;

export const initialState = {
  order: {
    product: null,
    cardTemplate: null,
    message: "",
    senderName: "",
    receiverName: "",
    receiverPhone: "",
    quantity: 1,
  },
  errors: {},
  touched: {},
};

export const orderValidationRules: OrderValidationRules = {
  product: [
    {
      condition: (value: ProductType | null) => !value,
      message: ORDER_ERROR_MESSAGE.PRODUCT.REQUIRED,
    },
  ],
  cardTemplate: [
    {
      condition: (value: CardTemplateType | null) => !value,
      message: ORDER_ERROR_MESSAGE.CARD_TEMPLATE.REQUIRED,
    },
  ],
  message: [
    {
      condition: (value: string) => !value || !value.trim(),
      message: ORDER_ERROR_MESSAGE.MESSAGE.REQUIRED,
    },
  ],
  senderName: [
    {
      condition: (value: string) => !value || !value.trim(),
      message: ORDER_ERROR_MESSAGE.SENDER.REQUIRED,
    },
  ],
  receiverName: [
    {
      condition: (value: string) => !value || !value.trim(),
      message: ORDER_ERROR_MESSAGE.RECEIVER.REQUIRED,
    },
  ],
  receiverPhone: [
    {
      condition: (value: string) => !value || !value.trim(),
      message: ORDER_ERROR_MESSAGE.RECEIVER.REQUIRED_TEL,
    },
    {
      condition: (value: string) => !PHONE_REGEX.test(value),
      message: ORDER_ERROR_MESSAGE.RECEIVER.INVALID_TEL_FORMAT,
    },
  ],
  quantity: [
    {
      condition: (value: number) => value < 1,
      message: ORDER_ERROR_MESSAGE.QUANTITY.INVALID_QUANTITY,
    },
  ],
};

export const isOrderComplete = (order: Order): boolean =>
  Boolean(
    order.product &&
      order.cardTemplate &&
      order.senderName &&
      order.receiverName &&
      order.receiverPhone &&
      order.message.trim() &&
      order.quantity >= 1,
  );

export const getValidationErrors = (
  errors: ValidationErrors<Order>,
): string[] => Object.values(errors).filter(Boolean) as string[];
