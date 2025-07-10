import { z } from "zod";

export const receiverItemSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  phone: z
    .string()
    .regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."),
  quantity: z
    .number({ invalid_type_error: "수량은 숫자여야 합니다." })
    .min(1, "수량은 1개 이상이어야 합니다."),
});

export const receiverArraySchema = z
  .array(receiverItemSchema)
  .min(1, "최소 1명 이상 추가해야 합니다.")
  .max(10, "최대 10명까지 추가할 수 있습니다.")
  .refine((list) => {
    const phones = list.map((r) => r.phone);
    return new Set(phones).size === phones.length;
  }, {
    message: "전화번호가 중복되었습니다.",
    path: ["receivers"],
  });

export const receiverFormSchema = z.object({
  receivers: receiverArraySchema,
});

export type ReceiverFormValues = z.infer<typeof receiverFormSchema>;
