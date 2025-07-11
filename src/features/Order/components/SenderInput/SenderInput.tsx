import * as S from './SenderInput.styles'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface SenderInputProps {
  register: UseFormRegisterReturn
  error?: string
}

const SenderInput = ({ register, error }: SenderInputProps) => {
  return (
    <S.Container>
      <S.Title>보내는 사람</S.Title>
      <S.InputContainer>
        <S.InputText
          {...register}
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
