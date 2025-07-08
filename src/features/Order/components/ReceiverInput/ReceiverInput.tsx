import * as S from './ReceiverInput.styles'

interface ReceiverInputProps {
  receiver: string
  setReceiver: (name: string) => void
  phoneNumber: string
  setPhoneNumber: (phone: string) => void
  quantity: number
  setQuantity: (quantity: number) => void
  errors: {
    receiver: string
    phoneNumber: string
    quantity: string
  }
}

const ReceiverInput = ({
  receiver,
  setReceiver,
  phoneNumber,
  setPhoneNumber,
  quantity,
  setQuantity,
  errors,
}: ReceiverInputProps) => {
  return (
    <S.Container>
      <S.Title>받는 사람</S.Title>
      <S.InputContainer>
        <S.InputLabel>이름</S.InputLabel>
        <S.InputText
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="이름을 입력하세요."
          isError={!!errors.receiver}
        />
        {errors.receiver && <S.ErrorText>{errors.receiver}</S.ErrorText>}
      </S.InputContainer>

      <S.InputContainer>
        <S.InputLabel>전화번호</S.InputLabel>
        <S.InputText
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호를 입력하세요."
          isError={!!errors.phoneNumber}
        />
        {errors.phoneNumber && <S.ErrorText>{errors.phoneNumber}</S.ErrorText>}
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel>수량</S.InputLabel>
        <S.InputText
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="구매 수량"
          isError={!!errors.quantity}
        />
        {errors.quantity && <S.ErrorText>{errors.quantity}</S.ErrorText>}
      </S.InputContainer>
    </S.Container>
  )
}

export default ReceiverInput
