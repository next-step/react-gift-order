import { z } from 'zod';

export const recipientSchema = z.object({
  name: z.string().min(1, '받는 사람 이름을 입력해주세요.'),
  phone: z
    .string()
    .regex(/^010\d{8}$/, '전화번호 형식이 올바르지 않아요. (예: 01012345678)'),
  quantity: z.coerce.number().min(1, '수량은 1개 이상이어야 해요.'),
});

export const orderSchema = z
  .object({
    message: z.string().min(1, '메시지를 입력해주세요.'),
    senderName: z.string().min(1, '보내는 사람 이름을 입력해주세요.'),
    selectedCardId: z.union([z.number(), z.null()]).refine((v) => v !== null, {
      message: '카드를 선택해주세요.',
    }),
    recipients: z
      .array(recipientSchema)
      .min(1, '최소 1명 이상 입력해주세요.')
      .max(10, '최대 10명까지만 입력할 수 있어요.'),
  })
  .superRefine((data, ctx) => {
    const phoneMap = new Map<string, number[]>();

    data.recipients.forEach((recipient, index) => {
      if (!phoneMap.has(recipient.phone)) {
        phoneMap.set(recipient.phone, []);
      }
      phoneMap.get(recipient.phone)?.push(index);
    });

    for (const [, indices] of phoneMap.entries()) {
      if (indices.length > 1) {
        indices.forEach((i) => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: '전화번호가 중복되었습니다.',
            path: ['recipients', i, 'phone'],
          });
        });
      }
    }
  });

export type OrderFormData = {
  message: string;
  senderName: string;
  selectedCardId: number | null;
  recipients: { name: string; phone: string; quantity: number }[];
};
