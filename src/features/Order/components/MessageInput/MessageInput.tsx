import * as S from './MessageInput.styles'

interface Props {
  message: string
  setMessage: (msg: string) => void
  error?: string
}

const MessageInput: React.FC<Props> = ({ message, setMessage, error }) => {
  return (
    <S.Container>
      <S.TextArea
        placeholder="메시지를 입력해주세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        isError={!!error}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  )
}

export default MessageInput
