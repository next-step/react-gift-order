import { z } from "zod";

export const orderSchema = z.object({
  senderName: z
    .string()
    .min(1, "보내는 사람 이름을 입력해주세요."),

  receiverName: z
    .string()
    .min(1, "받는 사람 이름을 입력해주세요."),

  receiverPhone: z
    .string()
    .regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."),

  quantity: z
    .number({ invalid_type_error: "수량은 숫자여야 합니다." })
    .min(1, "수량은 최소 1개 이상이어야 합니다."),

  message: z
    .string()
    .min(1, "메시지를 입력해주세요."),

  selectedCardId: z
    .number()
    .nullable()
    .optional(), 
});

export type OrderFormValues = z.infer<typeof orderSchema>;
