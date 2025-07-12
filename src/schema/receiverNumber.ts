import z from 'zod';
import type { Receiver } from './receiver';
import { ReceiverSchema } from './receiver';

export const ReceiversNumberListSchema = z
  .array(ReceiverSchema)
  .superRefine((receivers, ctx) => {
    const seenPhoneNumbers = new Map<string, number[]>();
    receivers.forEach((receiver, index) => {
      const phoneNumber = receiver.receiverPhoneNumber;
      if (phoneNumber) {
        if (seenPhoneNumbers.has(phoneNumber)) {
          seenPhoneNumbers.get(phoneNumber)?.forEach((prevIndex) => {
            ctx.addIssue({
              code: 'custom',
              message: '중복된 전화번호입니다.',
              path: [prevIndex, 'receiverPhoneNumber'],
            });
          });
          ctx.addIssue({
            code: 'custom',
            message: '중복된 전화번호입니다.',
            path: [index, 'receiverPhoneNumber'],
          });
          seenPhoneNumbers.get(phoneNumber)?.push(index);
        } else {
          seenPhoneNumbers.set(phoneNumber, [index]);
        }
      }
    });
  });

export const FormSchema = z.object({
  receivers: ReceiversNumberListSchema,
});

export type FormValues = { receivers: Receiver[] };
