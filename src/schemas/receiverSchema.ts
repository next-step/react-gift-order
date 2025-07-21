import { z } from "zod";

export const receiverSchema = z.object({
  name: z.string().trim().min(1, { message: "이름을 입력해주세요." }),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10,11}$/, { message: "올바른 전화번호 형식이 아니에요." }),
  quantity: z.number().min(1).int().nonnegative(),
});

export const receiversFormSchema = z.object({
  receivers: z
    .array(receiverSchema)
    .min(1, { message: "받는 사람을 추가해주세요." })
    .max(10, { message: "최대 10명까지 추가할 수 있습니다." }),
});

export type ReceiverField = z.infer<typeof receiverSchema>;
export type ReceiversFormValues = z.infer<typeof receiversFormSchema>;
