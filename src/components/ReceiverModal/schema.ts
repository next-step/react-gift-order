import { z } from 'zod';
import {
  RECEIVER_NAME_ERROR,
  PHONE_REGEX_ERROR,
  MAX_RECEIVERS,
  QUANTITY_MIN_ERROR,
  DUPLICATE_PHONE_ERROR,
  MAX_RECEIVERS_HINT_PREFIX,
  MAX_RECEIVERS_HINT_SUFFIX,
} from './constants';

export const ReceiverSchema = z.object({
  name: z.string().nonempty(RECEIVER_NAME_ERROR),
  phone: z.string().regex(/^010\d{8}$/, PHONE_REGEX_ERROR),
  quantity: z.number().min(1, QUANTITY_MIN_ERROR),
});

export type Receiver = z.infer<typeof ReceiverSchema>;

export const FormSchema = z.object({
  receivers: z
    .array(ReceiverSchema)
    .min(1)
    .max(MAX_RECEIVERS, `${MAX_RECEIVERS_HINT_PREFIX}${MAX_RECEIVERS}${MAX_RECEIVERS_HINT_SUFFIX}`)
    .superRefine((receivers: Receiver[], ctx: z.RefinementCtx) => {
      const seen = new Set<string>();
      receivers.forEach((r: Receiver, i: number) => {
        if (seen.has(r.phone)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: DUPLICATE_PHONE_ERROR,
            path: ['receivers', i, 'phone'],
          });
        } else {
          seen.add(r.phone);
        }
      });
    }),
});

export type FormValues = z.infer<typeof FormSchema>;
export type Receivers = FormValues['receivers'];
