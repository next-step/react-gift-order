import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "이메일을 입력해주세요.")
    .email("이메일은 이메일 형식으로 입력해주세요."),
  password: z
    .string()
    .trim()
    .min(1, "비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const orderSchema = z.object({
  message: z.string().trim().min(1, "메시지를 입력해주세요."),
  sender: z.string().trim().min(1, "보내는 사람 이름이 반드시 필요해요."),
});

export const receiverSchema = z.object({
  name: z.string().trim().min(1, "받는 사람 이름이 반드시 필요해요."),
  phone: z
    .string()
    .trim()
    .regex(/^010\d{8}$/, "전화번호는 01012341234 형식으로 입력하세요."),
  quantity: z.coerce.number().min(1, "수량은 1개 이상이어야 해요."),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
export type ReceiverFormValues = z.infer<typeof receiverSchema>;

const baseReceiverArraySchema = z.object({
  receivers: z.array(receiverSchema),
});

export const receiverArraySchema = baseReceiverArraySchema.superRefine(
  ({ receivers }, ctx) => {
    const phoneMap = new Map<string, number[]>();
    receivers.forEach((receiver, index) => {
      const indices = phoneMap.get(receiver.phone) ?? [];
      phoneMap.set(receiver.phone, [...indices, index]);
    });
    for (const indices of phoneMap.values()) {
      if (indices.length > 1) {
        indices.forEach((i) => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "중복된 전화번호입니다.",
            path: ["receivers", i, "phone"],
          });
        });
      }
    }
  }
);

export type ReceiverArrayFormValues = z.infer<typeof receiverArraySchema>;

export const fullOrderSchema = orderSchema.merge(baseReceiverArraySchema);
export type FullOrderFormValues = z.infer<typeof fullOrderSchema>;
