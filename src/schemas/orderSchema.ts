import { z } from "zod";
import { recipientSchema } from "./recipientSchema";

export const orderSchema = z.object({
    sender: z.string().min(1, "보내는 사람 이름을 입력해주세요."),
    recipients: z
        .array(recipientSchema)
        .min(1, "최소 1명 이상 입력해야 합니다.")
        .max(10, "최대 10명까지 입력할 수 있습니다."),
    cardId: z.number(),
    message: z.string().min(1, "메시지를 입력해주세요."),
}).refine(
    (data) => {
        const phones = data.recipients.map(r => r.phone);
        return new Set(phones).size === phones.length;
    },
    { message: "받는 사람의 전화번호가 중복되었습니다.", path: ["recipients"] }
);

export type OrderFormValues = z.infer<typeof orderSchema>; 