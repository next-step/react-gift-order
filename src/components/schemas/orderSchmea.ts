import { z } from 'zod';

export const recipientSchema = z.object({
  id: z.string(),
  receiveName: z.string().min(1, '받는 사람 이름을 입력해 주세요.'),
  receiveTel: z.string().min(10, '연락처를 입력해 주세요.'),
  count: z.number().min(1, '수량은 1 이상이어야 합니다.'),
});

export const orderSchema = z.object({
  msg: z.string().max(100, '메시지는 100자 이내로 입력해 주세요.').min(1, '메시지를 입력해주세요'),
  sendName: z.string().min(1, '보내는 사람 이름을 입력해 주세요.'),
  recipients: z.array(recipientSchema).min(1, '최소 1명 이상의 수신자가 필요합니다.'),
  total_count: z.number().min(1, '수량이 1 이상이어야 합니다.'),
});

// TypeScript용 타입
export type OrderFormValue = z.infer<typeof orderSchema>;
