import { z } from "zod";
import { VALIDATE_LABELS } from "./constants/validateLabels";
import { validatePhoneNumber } from "./utils/validation";
import { RECEIVER_SECTION_CONSTANTS } from "./constants/receiverSection";

export interface MessageCardFormData {
  cardMessage: string;
}

export const messageCardSchema = z.object({
  cardMessage: z.string().nonempty(VALIDATE_LABELS.MESSAGE_EMPTY),
});

export interface SenderFormData {
  senderName: string;
}

export const senderSchema = z.object({
  senderName: z.string().nonempty(VALIDATE_LABELS.NAME_EMPTY),
});

export const receiverItemSchema = z.object({
  name: z.string().nonempty(RECEIVER_SECTION_CONSTANTS.NAME_ERROR),
  phone: z
    .string()
    .nonempty(RECEIVER_SECTION_CONSTANTS.PHONE_ERROR)
    .refine(
      (value) => validatePhoneNumber(value),
      VALIDATE_LABELS.PHONE_INVALID
    ),
  quantity: z.string().nonempty(RECEIVER_SECTION_CONSTANTS.QUANTITY_ERROR),
});

// check 함수 사용 시 타입 에러 발생:
// 1. check 함수의 data 파라미터가 ParsePayload 타입으로 추론되어 배열 메소드 접근 불가
// 2. 반환값이 boolean이지만 MaybeAsync<void> 타입 기대로 인한 타입 불일치
// 3. 런타임에서 "Cannot read properties of undefined (reading 'onattach')" 에러 발생
// superRefine 사용하여 해결
export const receiversSchema = z.object({
  receivers: z.array(receiverItemSchema).superRefine((receivers, ctx) => {
    const phoneNumberSet = new Set<string>();

    receivers.forEach((receiver, index) => {
      if (receiver.phone && phoneNumberSet.has(receiver.phone)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATE_LABELS.PHONE_DUPLICATE,
          path: [index, "phone"],
        });

        return;
      }

      phoneNumberSet.add(receiver.phone);
    });
  }),
});
