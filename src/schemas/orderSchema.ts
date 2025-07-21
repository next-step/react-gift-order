import z from 'zod';

export const orderSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  sender: z.string().min(1, '이름을 입력해주세요.'),
  receiver: z.string().min(1, '이름을 입력해주세요.'),
  phone: z.union([
    z
      .string()
      .min(11, '전화번호를 입력해주세요.')
      .regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
    z
      .string()
      .min(13, '전화번호를 입력해주세요.')
      .regex(/^010-\d{4}-\d{4}$/, '올바른 전화번호 형식이 아닙니다.'),
  ]),
  quantity: z.number().min(1, '구매 수량은 1개 이상이어야 합니다.'),
});

export type OrderFormData = z.infer<typeof orderSchema>;

export const singleOrderSchema = z.object({
  receiver: z.string().min(1, '이름을 입력해주세요.'),
  phone: z.union([
    z
      .string()
      .min(11, '전화번호를 입력해주세요.')
      .regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
    z
      .string()
      .min(13, '전화번호를 입력해주세요.')
      .regex(/^010-\d{4}-\d{4}$/, '올바른 전화번호 형식이 아닙니다.'),
  ]),
  quantity: z.number().min(1, '구매 수량은 1개 이상이어야 합니다.'),
});

export const multiOrderSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  sender: z.string().min(1, '이름을 입력해주세요.'),
  recipients: z
    .array(singleOrderSchema)
    .min(1, '최소 1명 이상의 받는 사람을 입력해주세요.')
    .max(10, '최대 10명까지 입력할 수 있습니다.'),
});

export type MultiOrderFormData = z.infer<typeof multiOrderSchema>;
