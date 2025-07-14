import { z } from 'zod';

export const recipientsModalSchema = z
  .object({
    newRecipients: z
      .array(
        z.object({
          id: z.string(),
          receiveName: z.string().min(1, '이름은 필수입니다.'),
          receiveTel: z
            .string()
            .min(1, '연락처는 필수입니다.')
            .regex(/^010\d{8}$/, '전화번호 형식이 올바르지 않습니다. (예: 01012345678)'),
          count: z
            .number({ error: '수량은 숫자여야 합니다.' })
            .min(1, '1개 이상 수량을 선택해주세요'),
        })
      )
      .min(1, '최소 1명 이상의 수신자가 필요합니다.'),
  })
  .superRefine((data, ctx) => {
    const telMap = new Map<string, number>();

    data.newRecipients.forEach((recipient, index) => {
      const { receiveTel } = recipient;

      if (telMap.has(receiveTel)) {
        const duplicatedIndex = telMap.get(receiveTel)!;

        ctx.addIssue({
          path: ['newRecipients', index, 'receiveTel'],
          code: z.ZodIssueCode.custom,
          message: '이미 추가된 연락처입니다.',
        });
        ctx.addIssue({
          path: ['newRecipients', duplicatedIndex, 'receiveTel'],
          code: z.ZodIssueCode.custom,
          message: '이미 추가된 연락처입니다.',
        });
      } else {
        telMap.set(receiveTel, index);
      }
    });
  });

export type RecipientsModalFormData = z.infer<typeof recipientsModalSchema>;
