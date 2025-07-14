import { z } from "zod";

export const recipientSchema = z.object({
    name: z.string().min(1, "이름을 입력해주세요."),
    phone: z
        .string()
        .regex(/^010\d{8}$/, "전화번호는 01012341234 형식이어야 합니다."),
    quantity: z
        .number()
        .min(1, "수량은 1개 이상이어야 합니다."),
});

export type RecipientFormValues = z.infer<typeof recipientSchema>; 