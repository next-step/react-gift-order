import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export interface Recipient {
  name: string
  phone: string
  qty: number
}
export interface OrderFormValues {
  message: string
  sender: string
  recipients: Recipient[]
}

const phoneRegex = /^010\d{8}$/

const recipientSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z.string().regex(phoneRegex, '전화번호 형식이 올바르지 않습니다.'),
  qty: z.number().min(1, '1개 이상 입력해주세요.'),
})

const orderSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  sender: z.string().min(1, '보내는 사람을 입력해주세요.'),
  recipients: z
    .array(recipientSchema)
    .nonempty('받는 사람을 한 명 이상 추가해주세요.'),})

export default function useOrderForm(initialMessage: string) {
  const methods = useForm<OrderFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(orderSchema),

    defaultValues: {
      message: initialMessage,
      sender: '',
      recipients: [],
    },
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  })
  return {
    register,
    handleSubmit,
    setValue,
    errors,
    isValid,
    fields,
    append,
    remove,
    watch,
  }
}