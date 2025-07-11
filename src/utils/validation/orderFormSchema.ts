import { z } from 'zod';

export const receiverSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z
    .string()
    .min(1, '전화번호를 입력해주세요.')
    .regex(/^010\d{8}$/, '올바른 전화번호 형식이 아니에요.'),
    quantity: z
    .number({
      message: '구매 수량은 숫자여야 해요.',
    })
    .min(1, '구매 수량은 1개 이상이어야 해요.'),
});

export const receiversModalSchema = z.object({
  receivers: z.array(receiverSchema)
    .max(10, '최대 10명까지만 추가할 수 있습니다.')
    .superRefine((receivers, ctx) => {
      const phoneNumbers = receivers.map(receiver => receiver.phone);
      const duplicatePhones = new Set<string>();

      phoneNumbers.forEach((phone, index) => {
        if (phone && phoneNumbers.indexOf(phone) !== index) {
          duplicatePhones.add(phone);
        }
      });

      receivers.forEach((receiver, index) => {
        if (receiver.phone && duplicatePhones.has(receiver.phone)) {
          ctx.addIssue({
            code: 'custom',
            message: '중복된 전화번호가 있습니다.',
            path: [index, 'phone'],
          });
        }
      });
    })
});

// TODO 전화번호 중복 refine으로 변경

// .refine(
//   (receivers) => {
//       const phones = receivers.map((r) => r.phone);
//       return new Set(phones).size === phones.length;
//   },
//   { message: "전화번호가 중복되었습니다." }
// ),

export const orderFormSchema = z.object({
    message: z.string().min(1, '메시지를 입력해주세요.'),
    sender: z.string().min(1, '보내는 사람 이름을 입력해주세요.'),
    receivers: z.array(receiverSchema)
      .min(1, '최소 1명의 받는 사람을 입력해주세요.')
      .max(10, '최대 10명까지만 추가할 수 있습니다.'), 
  });

export type OrderFormSchema = z.infer<typeof orderFormSchema>;