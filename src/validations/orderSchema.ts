import { z } from "zod";

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

  receivers: z
    .array(
      z.object({
        name: z.string().min(1, "이름을 입력해주세요."),
        phone: z
          .string()
          .regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."),
        quantity: z
          .number({ invalid_type_error: "수량은 숫자여야 합니다." })
          .min(1, "수량은 최소 1 이상이어야 합니다."),
      })
    )
    .min(1, "최소 1명 이상 입력해주세요.")
    .max(10, "최대 10명까지만 추가할 수 있습니다.")
    .refine((list) => {
      const phones = list.map((r) => r.phone);
      return new Set(phones).size === phones.length;
    }, {
      message: "전화번호가 중복되었습니다.",
      path: ["receivers"],
    }),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;
