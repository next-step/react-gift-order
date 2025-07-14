import * as S from './ReceiverInput.styles'
import { type FieldError, useFormContext } from 'react-hook-form'
import type { Order } from '@/features/Order/schema/orderSchema'
import MyButton from '@/component/Button/Button'

interface ReceiverInputProps {
  index: number
  onRemove: () => void
}

const ReceiverInput = ({ index, onRemove }: ReceiverInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Order>()

  const fieldErrors = (errors.receivers?.[index] ?? {}) as {
    receiver?: FieldError
    phone?: FieldError
    quantity?: FieldError
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>받는 사람 {index + 1}</S.Title>
        <MyButton onClick={onRemove} size="verySmall" variant="outlined">
          삭제
        </MyButton>
      </S.TitleContainer>

      <S.InputContainer>
        <S.InputLabel>이름</S.InputLabel>
        <S.InputText
          placeholder="이름"
          {...register(`receivers.${index}.receiver`)}
          isError={!!fieldErrors.receiver}
        />
        {fieldErrors.receiver && (
          <S.ErrorText>{fieldErrors.receiver.message}</S.ErrorText>
        )}
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel>전화번호</S.InputLabel>
        <S.InputText
          placeholder="전화번호"
          {...register(`receivers.${index}.phone`)}
          isError={!!fieldErrors.phone}
        />
        {fieldErrors.phone && (
          <S.ErrorText>{fieldErrors.phone.message}</S.ErrorText>
        )}
      </S.InputContainer>

      <S.InputContainer>
        <S.InputLabel>수량</S.InputLabel>
        <S.InputText
          type="number"
          placeholder="수량"
          {...register(`receivers.${index}.quantity`, { valueAsNumber: true })}
          isError={!!fieldErrors.quantity}
        />
        {fieldErrors.quantity && (
          <S.ErrorText>{fieldErrors.quantity.message}</S.ErrorText>
        )}
      </S.InputContainer>
      <S.Divider />
    </S.Container>
  )
}

export default ReceiverInput
