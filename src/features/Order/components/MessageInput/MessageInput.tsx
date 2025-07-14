import type { Order } from '@/features/Order/schema/orderSchema'
import * as S from './MessageInput.styles'
import { useFormContext } from 'react-hook-form'

const MessageInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Order>()

  const error = errors.message

  return (
    <S.Container>
      <S.TextArea
        placeholder="메시지를 입력해주세요."
        {...register('message')}
        isError={!!error}
      />
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  )
}

export default MessageInput
