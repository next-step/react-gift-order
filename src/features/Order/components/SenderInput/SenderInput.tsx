import type { Order } from '@/features/Order/schema/orderSchema'
import * as S from './SenderInput.styles'
import { useFormContext } from 'react-hook-form'

const SenderInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Order>()

  const error = errors.sender

  return (
    <S.Container>
      <S.Title>보내는 사람</S.Title>
      <S.InputContainer>
        <S.InputText
          placeholder="이름을 입력하세요."
          {...register('sender')}
          isError={!!error}
        />
        {error && <S.ErrorText>{error.message}</S.ErrorText>}
      </S.InputContainer>
      <S.SubText>
        * 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.
      </S.SubText>
    </S.Container>
  )
}

export default SenderInput
