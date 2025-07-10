import { z } from "zod";
import { receiverArraySchema } from "./receiverSchema";

export const orderFormSchema = z.object({
  senderName: z
    .string()
    .min(1, "보내는 사람 이름을 입력해주세요."),

  message: z
    .string()
    .min(1, "메시지를 입력해주세요."),

  selectedCardId: z
    .number()
    .nullable()
    .optional(),

  receivers: receiverArraySchema,
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;
