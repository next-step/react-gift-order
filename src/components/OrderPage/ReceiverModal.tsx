import styled from '@emotion/styled'
import type {
  UseFormRegister,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldArrayWithId,
} from 'react-hook-form'
import type { FormValues } from './OrderForm'
import { useReceiverInput } from '@/hooks/useReceiverInput'

interface Props {
  fields: FieldArrayWithId<FormValues, 'receivers', 'id'>[]
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
  append: UseFieldArrayAppend<FormValues, 'receivers'>
  remove: UseFieldArrayRemove
  onClose: () => void
  onSave: () => void
}

const receiverInputs = useReceiverInput()

export function ReceiverModal({
  fields,
  register,
  errors,
  append,
  remove,
  onClose,
  onSave,
}: Props) {
  return (
    <Overlay>
      <Container>
        <Header>
          <strong>받는 사람</strong>
        </Header>
        {fields.map((field, index) => (
          <InputGroup key={field.id}>
            {receiverInputs.map(({ name, placeholder, rules, type }) => (
              <div key={name}>
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(`receivers.${index}.${name}` as const, rules)}
                />
                {errors.receivers?.[index]?.[name] && (
                  <Error>{errors.receivers[index]?.[name]?.message}</Error>
                )}
              </div>
            ))}

            <button type="button" onClick={() => remove(index)}>
              삭제
            </button>
          </InputGroup>
        ))}

        {fields.length < 10 && (
          <button
            type="button"
            onClick={() => append({ name: '', phone: '', quantity: 1 })}
          >
            추가하기
          </button>
        )}

        <Footer>
          <button type="button" onClick={onClose}>
            취소
          </button>
          <button type="button" onClick={onSave}>
            {fields.length}명 완료
          </button>
        </Footer>
      </Container>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1000;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  input {
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    border-radius: 6px;
    flex: 1;
  }

  button {
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    border-radius: 6px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 12px;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;

  button {
    background-color: ${({ theme }) => theme.colors.kakaoYellow};
    color: black;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
  }
`

const Error = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 14px;
  color: red;
`
