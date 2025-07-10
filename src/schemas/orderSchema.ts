// schemas/orderSchema.ts
import { z } from 'zod';

export const recipientSchema = z.object({
  name: z.string().min(1, '받는 사람 이름을 입력해주세요.'),
  phone: z.string().regex(/^010\d{8}$/, '올바른 전화번호를 입력해주세요. (예: 01012341234)'),
  quantity: z.number().min(1, '수량은 1개 이상이어야 합니다.'),
});

export const orderFormSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  senderName: z.string().min(1, '보내는 사람 이름을 입력해주세요.'),
  recipients: z
    .array(recipientSchema)
    .min(1, '받는 사람을 최소 1명 이상 입력해주세요.')
    .max(10, '받는 사람은 최대 10명까지 등록 가능합니다.')
    .refine(
      (recipients) => {
        const phones = recipients.map((r) => r.phone);
        return new Set(phones).size === phones.length;
      },
      { message: '받는 사람의 전화번호가 중복되었습니다.' },
    ),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
export type RecipientData = z.infer<typeof recipientSchema>;
