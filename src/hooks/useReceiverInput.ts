import type { RegisterOptions } from 'react-hook-form'
import type { FormValues } from '@/components/OrderPage/OrderForm'

type ReceiverInputConfig = {
  name: keyof FormValues['receivers'][number]
  placeholder: string
  type: 'text' | 'number'
  rules: RegisterOptions<FormValues, any>
}

export const useReceiverInput = (): readonly ReceiverInputConfig[] =>
  [
    {
      name: 'name',
      placeholder: '이름',
      rules: {
        required: '이름을 입력해주세요.',
      },
      type: 'text',
    },
    {
      name: 'phone',
      placeholder: '전화번호',
      rules: {
        required: '전화번호를 입력해주세요.',
        pattern: {
          value: /^010\d{8}$/,
          message: '올바른 전화번호 형식이 아니에요.',
        },
      },
      type: 'text',
    },
    {
      name: 'quantity',
      placeholder: '수량',
      rules: {
        required: '수량을 입력해주세요.',
        min: { value: 1, message: '1개 이상이어야 해요.' },
      },
      type: 'number',
    },
  ] as const
