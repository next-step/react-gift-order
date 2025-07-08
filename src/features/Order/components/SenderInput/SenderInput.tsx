import * as S from './SenderInput.styles'

interface SenderInputProps {
  sender: string
  setSender: (name: string) => void
  error: string
}

const SenderInput = ({ sender, setSender, error }: SenderInputProps) => {
  return (
    <S.Container>
      <S.Title>보내는 사람</S.Title>
      <S.InputContainer>
        <S.InputText
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="이름을 입력하세요."
          isError={!!error}
        />
        {error && <S.ErrorText>{error}</S.ErrorText>}
      </S.InputContainer>
      <S.SubText>
        * 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.
      </S.SubText>
    </S.Container>
  )
}

export default SenderInput
