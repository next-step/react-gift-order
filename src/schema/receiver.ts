import z from 'zod';

export const ReceiverSchema = z.object({
  receiverName: z
    .string()
    .nonempty('이름을 입력해주세요.')
    .regex(/^[가-힣a-zA-Z]{2,}$/, '2자 이상 한글 또는 영어만 입력해주세요.'),
  receiverPhoneNumber: z
    .string()
    .nonempty('전화번호를 입력해주세요.')
    .regex(/^\d{10,11}$/, '올바른 전화번호 형식이 아니에요.'),
  itemCount: z
    .number()
    .positive('구매 수량은 1개 이상이어야 해요.')
    .min(1, '구매 수량을 입력해주세요.'),
});

export type Receiver = z.infer<typeof ReceiverSchema>;
