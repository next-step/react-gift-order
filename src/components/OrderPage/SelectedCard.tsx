import styled from '@emotion/styled'
import type { UseFormRegister, FieldError } from 'react-hook-form'
import { cardMock } from '@/pages/OrderPage/cardMock'

interface Props {
  selectedCard: (typeof cardMock)[0]
  register: UseFormRegister<any>
  messageError?: FieldError
}

export function SelectedCard({ selectedCard, register, messageError }: Props) {
  return (
    <Wrapper>
      <img src={selectedCard.imageUrl} alt="selected" />
      <textarea
        {...register('message', {
          required: '메시지를 입력해주세요.',
        })}
        placeholder="메시지를 입력해주세요."
      />
      {messageError && <Error>{messageError.message}</Error>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 100%;
    max-width: 360px;
    border-radius: 12px;
    margin-bottom: 34px;
  }
  textarea {
    width: 100%;
    height: 60px;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    border-radius: 12px;
    resize: none;
  }
`

const Error = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 14px;
  color: red;
`
