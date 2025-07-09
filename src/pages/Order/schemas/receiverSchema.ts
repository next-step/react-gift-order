import { z } from 'zod';

export const receiverSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z
    .string()
    .regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
  quantity: z
    .number({ invalid_type_error: '수량을 입력해주세요.' })
    .min(1, '수량은 1개 이상이어야 합니다.'),
});

export const receiverListSchema = z
  .array(receiverSchema)
  .max(10, '최대 10명까지 입력 가능합니다.')
  .refine(
    (receivers) => {
      const phoneSet = new Set();
      return receivers.every((r) => {
        if (phoneSet.has(r.phone)) return false;
        phoneSet.add(r.phone);
        return true;
      });
    },
    { message: '전화번호가 중복되었습니다.' }
  );

export type Receiver = z.infer<typeof receiverSchema>;
export type ReceiverError = { name?: string; phone?: string; quantity?: string };
