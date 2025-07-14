import { z } from 'zod';

const PHONE_REGEX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

const receiversSchema = z
  .array(
    z.object({
      name: z.string().min(1, '이름을 입력해주세요.'),
      phoneNumber: z
        .string()
        .min(1, '전화번호를 입력해주세요.')
        .regex(PHONE_REGEX, '올바른 전화번호 형식이 아니에요.'),
      quantity: z
        .number({
          required_error: '구매 수량을 입력해주세요.',
          invalid_type_error: '구매 수량을 입력해주세요.',
        })
        .min(1, '구매 수량은 1개 이상이어야 해요.'),
    }),
  )
  .superRefine((receivers, ctx) => {
    const phoneNumbers = receivers.map((receiver) => receiver.phoneNumber);
    const duplicates = phoneNumbers.filter((phone, index) => phoneNumbers.indexOf(phone) !== index);

    receivers.forEach((receiver, index) => {
      if (duplicates.includes(receiver.phoneNumber)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '중복된 전화번호가 있습니다.',
          path: [index, 'phoneNumber'],
        });
      }
    });
  });

export const receiversFormSchema = z.object({
  receivers: receiversSchema,
});

export type ReceiversFormData = z.infer<typeof receiversFormSchema>;

export const orderFormSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  messageCardId: z.string(),
  ordererName: z.string().min(1, '이름을 입력해주세요.'),
  receivers: receiversSchema,
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
