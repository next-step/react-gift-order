// src/schemas/orderSchema.ts
import { z } from "zod";

export const receiverSchema = z.object({
  name: z.string().min(1, "받는 사람 이름을 입력해주세요."),
  phone: z
    .string()
    .regex(/^010\d{8}$/, "전화번호는 01012345678 형식이어야 해요."),
  quantity: z
    .number()
    .min(1, "수량은 1개 이상이어야 해요."),
});

export const orderSchema = z.object({
  sender: z.string().min(1, "보내는 사람 이름을 입력해주세요."),
  receivers: z
    .array(receiverSchema)
    .min(1, "최소 1명 이상 입력해야 해요.")
    .max(10, "최대 10명까지 입력할 수 있어요.")
    .refine(
      (receivers) =>
        new Set(receivers.map((r) => r.phone)).size === receivers.length,
      {
        message: "전화번호는 중복될 수 없어요.",
        path: ["receivers"],
      }
    ),
});
