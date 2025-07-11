import { z } from 'zod'
import { VALIDATE_RULES } from '@/shared/lib/validateRules'

// * 받는 사람 개별 스키마
export const receiverSchema = z.object({
  // * 받는 사람 이름 (name 규칙 사용)
  name: z.string().min(1, VALIDATE_RULES.name.required?.errorMsg),

  // * 받는 사람 전화번호 (phone 규칙 사용)
  phone: z
    .string()
    .min(1, VALIDATE_RULES.phone.required?.errorMsg)
    .regex(VALIDATE_RULES.phone.regex?.value, VALIDATE_RULES.phone.regex?.errorMsg),

  // * 수량 (quantity 규칙 사용)
  count: z.number().min(1, VALIDATE_RULES.quantity.custom?.errorMsg),
})

// * 받는 사람들 배열 스키마
export const receiversSchema = z
  .array(receiverSchema)
  .max(10, '최대 10명까지만 추가할 수 있습니다.')

// * 주문하기 폼 스키마 정의 (Zod 사용)
export const orderFormSchema = z.object({
  // * 카드 메시지 (message 규칙 사용)
  cardMessage: z.string().min(1, VALIDATE_RULES.message.required?.errorMsg),

  // * 보내는 사람 (name 규칙 사용)
  sender: z.string().min(1, VALIDATE_RULES.name.required?.errorMsg),

  // * 받는 사람들 (배열로 변경)
  receivers: receiversSchema,

  // * 선택된 카드
  selectedCard: z.object({
    id: z.number(),
    thumbUrl: z.string(),
    imageUrl: z.string(),
    defaultTextMessage: z.string(),
  }),
})

export type OrderFormData = z.infer<typeof orderFormSchema>
export type ReceiverData = z.infer<typeof receiverSchema>
