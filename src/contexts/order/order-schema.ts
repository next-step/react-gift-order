import { z } from "zod";
import { ORDER_ERROR_MESSAGE, PHONE_REGEX } from "@/constants";
import type { CardTemplateType, ProductType } from "@/types";

const productSchema = z.nullable(
  z.custom<ProductType>(val => val !== null, {
    message: ORDER_ERROR_MESSAGE.PRODUCT.REQUIRED,
  }),
);

const cardTemplateSchema = z.nullable(
  z.custom<CardTemplateType>(val => val !== null, {
    message: ORDER_ERROR_MESSAGE.CARD_TEMPLATE.REQUIRED,
  }),
);

const receiverSchema = z.object({
  receiverName: z
    .string()
    .min(1, ORDER_ERROR_MESSAGE.RECEIVER.REQUIRED)
    .refine(
      val => val.trim().length > 0,
      ORDER_ERROR_MESSAGE.RECEIVER.REQUIRED,
    ),
  receiverPhone: z
    .string()
    .min(1, ORDER_ERROR_MESSAGE.RECEIVER.REQUIRED_TEL)
    .refine(
      val => val.trim().length > 0,
      ORDER_ERROR_MESSAGE.RECEIVER.REQUIRED_TEL,
    )
    .refine(
      val => PHONE_REGEX.test(val),
      ORDER_ERROR_MESSAGE.RECEIVER.INVALID_TEL_FORMAT,
    ),
  quantity: z.number().min(1, ORDER_ERROR_MESSAGE.QUANTITY.INVALID_QUANTITY),
});

const receiversSchema = z
  .array(receiverSchema)
  .max(10, "최대 10명까지 선택할 수 있습니다.")
  .refine(
    receivers => {
      if (!receivers || receivers.length === 0) return true;

      const phoneNumbers = receivers
        .map(r => r.receiverPhone?.trim())
        .filter(phone => phone && phone.length > 0);

      const uniquePhones = new Set(phoneNumbers);
      return phoneNumbers.length === uniquePhones.size;
    },
    {
      message: ORDER_ERROR_MESSAGE.RECEIVER.DUPLICATE_TEL_NUMBER,
    },
  )
  .optional();

export const orderSchema = z.object({
  product: productSchema,
  cardTemplate: cardTemplateSchema,
  message: z.string().min(1, ORDER_ERROR_MESSAGE.MESSAGE.REQUIRED),
  senderName: z.string().min(1, ORDER_ERROR_MESSAGE.SENDER.REQUIRED),
  receivers: receiversSchema,
});

export const isOrderComplete = (order: Partial<OrderFormData>): boolean => {
  const hasBasicInfo = Boolean(
    order.product &&
      order.cardTemplate &&
      order.senderName &&
      order.message?.trim(),
  );

  const hasReceivers = Boolean(
    order.receivers &&
      order.receivers.length > 0 &&
      order.receivers.every(
        receiver =>
          receiver.receiverName &&
          receiver.receiverPhone &&
          receiver.quantity &&
          receiver.quantity >= 1,
      ),
  );
  return hasBasicInfo && hasReceivers;
};

export const orderFormKeys = Object.keys(
  orderSchema.shape,
) as (keyof OrderFormData)[];
export const isValidOrderKey = (key: string): key is keyof OrderFormData => {
  return orderFormKeys.includes(key as keyof OrderFormData);
};

export type ReceiverKeys = keyof z.infer<typeof receiverSchema>;
export type OrderFormData = z.infer<typeof orderSchema>;
