import z from 'zod';

export const OrderSchema = z.object({
  senderName: z
    .string()
    .nonempty('이름을 입력해주세요.')
    .regex(/^[가-힣a-zA-Z]{2,}$/, '2자 이상 한글/영어만 가능합니다.'),
  message: z.string().nonempty('메시지를 입력해주세요.'),
});

export type OrderType = z.infer<typeof OrderSchema>;
