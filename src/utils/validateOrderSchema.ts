import * as z from "zod";

export const receiverSchema = z.object({
    name: z.string().min(1, "이름을 입력해주세요."),
    phone: z.string().regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."),
    quantity: z.number().min(1, "수량은 최소 1개 이상이어야 합니다."),
});

export const orderSchema = z.object({
    message: z.string().min(1, "메시지를 입력해주세요."),
    sender: z.string().min(1, "보내는 사람을 입력해주세요."),
    receivers: z
        .array(receiverSchema)
        .min(1, "최소 1명 이상의 받는 사람을 추가해주세요.")
        .max(10, "최대 10명까지만 등록할 수 있어요.")
        .refine(
            (receivers) => {
                const phones = receivers.map((r) => r.phone);
                return new Set(phones).size === phones.length;
            },
            { message: "전화번호가 중복되었습니다." }
        ),
});

export type OrderFormData = z.infer<typeof orderSchema>;