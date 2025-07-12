import { z } from "zod";

export const receiverSchema = z.object({
  receivers: z
    .array(
      z.object({
        name: z.string().min(1, "이름을 입력해주세요."),
        phone: z
          .string()
          .min(1, "전화번호를 입력해주세요.")
          .regex(/^010\d{8}$/, "올바른 전화번호 형식이 아닙니다."),
        quantity: z
          .number()
          .min(1, "구매 수량은 1개 이상이어야 합니다."),
      })
    )
    .refine(
      receivers => {
        const phones = receivers.map(r => r.phone);
        return new Set(phones).size === phones.length;
      },
      { message: "중복된 전화번호가 있습니다." }
    ),
});

export type ReceiverFormData = z.infer<typeof receiverSchema>;
