import { z } from 'zod';

export const recipientSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z
    .string()
    .min(1, '전화번호를 입력해주세요.')
    .regex(/^010[0-9]{8}$/, '올바른 전화번호 형식이 아니에요.'),
  quantity: z.coerce.number().min(1, '구매 수량은 1개 이상이어야 해요.'),
});

export const recipientArraySchema = z
  .array(recipientSchema)
  .min(0, '최소 0명')
  .max(10, '최대 10명')
  .superRefine((arr, ctx) => {
    const phoneMap = new Map<string, number[]>();
    arr.forEach((r, i) => {
      const indices = phoneMap.get(r.phone) ?? [];
      indices.push(i);
      phoneMap.set(r.phone, indices);
    });
    phoneMap.forEach((indices, phone) => {
      if (phone && indices.length > 1) {
        indices.forEach(idx => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: '중복된 전화번호가 있습니다.',
            path: [idx, 'phone'],
          });
        });
      }
    });
  });

export const orderSchema = z.object({
  senderName: z.string().min(1, '이름을 입력해주세요.'),
  message: z.string().min(1, '메시지를 입력해주세요.'),
  selectedTemplate: z.object({
    id: z.number(),
    thumbUrl: z.string(),
    imageUrl: z.string(),
    defaultTextMessage: z.string(),
  }),
  recipients: recipientArraySchema,
});
