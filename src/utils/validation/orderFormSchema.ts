import { z } from 'zod';

export const receiverSchema = z.object({
  receiverName: z.string().min(1, '받는 사람 이름을 입력해주세요.'),
  receiverPhone: z
    .string()
    .min(1, '전화번호를 입력해주세요.')
    .regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
  quantity: z
    .number({ error: '수량을 입력해주세요.' })
    .min(1, '수량은 1개 이상이어야 합니다.'),
});

export const orderFormSchema = z.object({
    message: z.string().min(1, '메시지를 입력해주세요.'),
    senderName: z.string().min(1, '보내는 사람 이름을 입력해주세요.'),
    receivers: z.array(receiverSchema).min(1, '최소 1명의 받는 사람을 입력해주세요.'), 
  });

export type OrderFormSchema = z.infer<typeof orderFormSchema>;