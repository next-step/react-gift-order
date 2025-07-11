import { z } from 'zod';

const recipientSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z.string().regex(/^010\d{8}$/, '올바른 전화번호 형식이 아닙니다.'),
  quantity: z.number().min(1, '수량은 1개 이상이어야 합니다.'),
});

// 유효성 검사 규칙
export const orderFormSchema = z.object({
  senderName: z.string().min(1, '보내는 사람 이름은 필수예요.'),
  message: z.string().optional(),
  recipients: z.array(recipientSchema)
    .min(1, '받는 사람을 최소 1명 이상 추가해주세요.') 
    .max(10, '받는 사람은 최대 10명까지 추가할 수 있습니다.'), 
}).refine((data) => {
  const phoneNumbers = data.recipients.map(r => r.phone);
  return new Set(phoneNumbers).size === phoneNumbers.length;
}, {
  message: '중복된 전화번호가 있습니다.',
  path: ['recipients'], // 오류가 발생한 필드 경로
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;
