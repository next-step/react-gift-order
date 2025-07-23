import { z } from 'zod';

export const ReceiverModel = z.object({
  receiverName: z.string().min(1, '이름을 입력해주세요.'),
  phoneNumber: z
    .string()
    .min(1, '전화번호를 입력해주세요.')
    .regex(/^01[0-9]{8,9}$/, '올바른 전화번호 형식이 아니에요.'),
  quantity: z
    .number({ message: '수량을 입력해주세요.' })
    .min(1, '수량은 1개 이상이어야 합니다.')
    .max(999, '수량은 999개 이하로 입력해주세요.'),
});

export const ReceiversModel = z
  .object({
    receivers: z
      .array(ReceiverModel)
      .min(1, '받는 사람을 추가해주세요.')
      .max(10, '최대 10명까지 추가할 수 있어요.'),
  })
  .refine(
    (data) => {
      const phoneNumbers = new Set<string>();
      for (const receiver of data.receivers) {
        if (phoneNumbers.has(receiver.phoneNumber)) {
          return false;
        }
        phoneNumbers.add(receiver.phoneNumber);
      }
      return true;
    },
    {
      message: '이미 사용중인 전화번호입니다.',
      path: ['receivers'],
    }
  );

export const OrderFormModel = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  senderName: z.string().min(1, '보내는 사람 이름을 입력해주세요.'),
  receivers: ReceiversModel,
});

export type ReceiverModelType = z.infer<typeof ReceiverModel>;
export type ReceiversModelType = z.infer<typeof ReceiversModel>;
export type OrderFormModelType = z.infer<typeof OrderFormModel>;