import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("이메일은 이메일 형식으로 입력해주세요."),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const orderSchema = z.object({
  message: z.string().min(1, "메시지를 입력해주세요."),
  sender: z.string().min(1, "보내는 사람 이름이 반드시 필요해요."),
  receiver: z.string().min(1, "받는 사람 이름이 반드시 필요해요."),
  phone: z
    .string()
    .regex(/^010\d{8}$/, "전화번호는 01012341234 형식으로 입력하세요."),
  quantity: z.coerce.number().min(1, "수량은 1개 이상이어야 해요."),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
