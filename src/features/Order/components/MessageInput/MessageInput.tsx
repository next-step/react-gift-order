import * as S from './MessageInput.styles'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface MessageInputProps {
  register: UseFormRegisterReturn
  error?: string
}

const MessageInput = ({ register, error }: MessageInputProps) => {
  return (
    <S.Container>
      <S.TextArea
        placeholder="메시지를 입력해주세요."
        {...register}
        isError={!!error}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  )
}

export default MessageInput
