import styled from '@emotion/styled'
import type { UseFormRegister, FieldError } from 'react-hook-form'

interface Props {
  register: UseFormRegister<any>
  error?: FieldError
}

export function SenderInput({ register, error }: Props) {
  return (
    <Wrapper>
      <label>보내는 사람</label>
      <input
        {...register('sender', {
          required: '이름을 입력해주세요.',
        })}
        placeholder="이름을 입력하세요."
      />
      {error && <Error>{error.message}</Error>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 34px;
  label {
    font-weight: 600;
  }
  input {
    flex: 1;
    width: 100%;
    padding: 10px;
    margin-top: 14px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`

const Error = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 14px;
  color: red;
`
