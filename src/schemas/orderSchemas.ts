import { z } from "zod";
import {
  MAX_RECEIVER_COUNT,
  MIN_PASSWORD_LENGTH,
  MIN_PRODUCT_COUNT,
  MIN_RECEIVER_COUNT,
} from "@/constants/validation";
import { ERROR_MESSAGES } from "@/constants/messages";

const phoneRegex = /^010\d{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ReceiverSchema = z.object({
  name: z.string().min(1, ERROR_MESSAGES.VALIDATE.NAME),
  phone: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATE.PHONE)
    .regex(phoneRegex, ERROR_MESSAGES.VALIDATE.PHONE_TYPE),
  quantity: z.number().min(MIN_PRODUCT_COUNT, ERROR_MESSAGES.VALIDATE.QUANTITY),
});

export const ReceiverListSchema = z
  .object({
    receivers: z
      .array(ReceiverSchema)
      .min(MIN_RECEIVER_COUNT, ERROR_MESSAGES.VALIDATE.SELECT_RECEIVER)
      .max(MAX_RECEIVER_COUNT, ERROR_MESSAGES.VALIDATE.MAX_RECEIVER_NUMBER),
  })
  .superRefine((data, ctx) => {
    const phones = new Set<string>();
    data.receivers.forEach((r, idx) => {
      if (phones.has(r.phone)) {
        ctx.addIssue({
          path: ["receivers", idx, "phone"],
          code: "custom",
          message: ERROR_MESSAGES.VALIDATE.DUPLICATE_PHONE,
        });
      }
      phones.add(r.phone);
    });
  });

export const SenderSchema = z.object({
  senderName: z.string().min(1, ERROR_MESSAGES.VALIDATE.NAME),
});

export const MessageSchema = z.object({
  message: z.string().min(1, ERROR_MESSAGES.VALIDATE.MESSGE),
});

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, ERROR_MESSAGES.LOGIN.ID_EMPTY)
    .regex(emailRegex, ERROR_MESSAGES.LOGIN.ID_INVALID),
  password: z
    .string()
    .min(1, ERROR_MESSAGES.LOGIN.PW_EMPTY)
    .min(
      MIN_PASSWORD_LENGTH,
      ERROR_MESSAGES.LOGIN.PW_TOO_SHORT(MIN_PASSWORD_LENGTH),
    ),
});
