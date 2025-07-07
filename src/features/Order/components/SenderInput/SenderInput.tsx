import {
  Container,
  Title,
  InputContainer,
  InputText,
  SubText,
  ErrorText,
} from './SenderInput.styles'

interface SenderInputProps {
  sender: string
  setSender: (name: string) => void
  error: string
}

const SenderInput = ({ sender, setSender, error }: SenderInputProps) => {
  return (
    <Container>
      <Title>보내는 사람</Title>
      <InputContainer>
        <InputText
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="이름을 입력하세요."
        />
        {error && <ErrorText>{error}</ErrorText>}
      </InputContainer>
      <SubText>
        * 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.
      </SubText>
    </Container>
  )
}

export default SenderInput
