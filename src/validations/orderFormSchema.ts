import { z } from "zod";
import { receiverItemSchema } from "./receiverSchema";

export const orderFormSchema = z.object({
  senderName: z.string().min(1, "보내는 사람 이름을 입력해주세요."),
  message: z.string().min(1, "메시지를 입력해주세요."),
  selectedCardId: z.number().nullable().optional(),

  receivers: z
    .array(receiverItemSchema)
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
