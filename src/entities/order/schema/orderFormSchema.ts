import { z } from 'zod'
import { VALIDATE_RULES } from '@/shared/lib/validateRules'

// * 받는 사람 개별 스키마
export const receiverSchema = z.object({
  name: z.string().min(1, VALIDATE_RULES.name.required?.errorMsg),
  phone: z
    .string()
    .min(1, VALIDATE_RULES.phone.required?.errorMsg)
    .regex(VALIDATE_RULES.phone.regex?.value, VALIDATE_RULES.phone.regex?.errorMsg),
  count: z.number().min(1, VALIDATE_RULES.quantity.custom?.errorMsg),
})

// * 받는 사람들 배열 스키마
export const receiversSchema = z
  .array(receiverSchema)
  .max(10, '최대 10명까지만 추가할 수 있습니다.')
  .superRefine((receivers, ctx) => {
    // 전화번호 중복 체크
    const phoneMap = new Map<string, number[]>()

    // 중복된 전화번호와 해당 인덱스들 찾기
    receivers.forEach((receiver, index) => {
      const phone = receiver.phone.trim()
      if (phone) {
        if (!phoneMap.has(phone)) {
          phoneMap.set(phone, [])
        }
        phoneMap.get(phone)!.push(index)
      }
    })

    // 중복된 전화번호가 있는 필드에 에러 추가
    for (const indices of phoneMap.values()) {
      if (indices.length > 1) {
        indices.forEach((index) => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [index, 'phone'],
            message: '중복된 전화번호입니다.',
          })
        })
      }
    }
  })

// * 주문하기 폼 스키마
export const orderFormSchema = z.object({
  cardMessage: z.string().min(1, VALIDATE_RULES.message.required?.errorMsg),
  sender: z.string().min(1, VALIDATE_RULES.name.required?.errorMsg),
  receivers: receiversSchema,
  selectedCard: z.object({
    id: z.number(),
    thumbUrl: z.string(),
    imageUrl: z.string(),
    defaultTextMessage: z.string(),
  }),
})

export type OrderFormData = z.infer<typeof orderFormSchema>
export type ReceiverData = z.infer<typeof receiverSchema>
