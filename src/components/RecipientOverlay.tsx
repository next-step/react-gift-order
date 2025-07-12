import React, { useRef } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import styled from '@emotion/styled'

import { FormRow } from '@/styles/OrderPage.styled'
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Upbanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
  }
`

const Modal = styled.div`
  background: #fff;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  min-height: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem 1.5rem;
`

const Footer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
`

const Button = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  background: ${({ primary }) => (primary ? '#ffeb00' : '#f5f5f5')};
  color: ${({ primary }) => (primary ? '#000' : '#333')};
`

export type Recipient = {
  name: string
  phone: string
  quantity: number
}

export default function RecipientOverlay({
  defaultRecipients,
  onComplete,
  onClose,
}: {
  defaultRecipients: Recipient[]
  onComplete: (recipients: Recipient[], shouldClose: boolean) => void
  onClose: () => void
}) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<{ recipients: Recipient[] }>({
    defaultValues: { recipients: defaultRecipients || [] },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  })

  const originalRecipients = useRef(defaultRecipients)
  const listEndRef = useRef<HTMLDivElement>(null)
  const phoneRegex = /^010-?\d{4}-?\d{4}$/

  const onFinish = handleSubmit((data) => {
    if (data.recipients.length === 0) {
      onClose()
      return
    }

    const phones = data.recipients.map((r) => r.phone)
    if (phones.length !== new Set(phones).size) {
      alert('중복된 전화번호가 있습니다.')
      return
    }

    const hasInvalidPhone = data.recipients.some(
      (r) => !phoneRegex.test(r.phone)
    )
    if (hasInvalidPhone) {
      alert(
        '전화번호는 010으로 시작하는 11자리 숫자이거나 010-0000-0000 형식이어야 합니다.'
      )
      return
    }

    const hasInvalidQuantity = data.recipients.some(
      (r) => !r.quantity || r.quantity < 1
    )
    if (hasInvalidQuantity) {
      alert('수량은 1개 이상이어야 합니다.')
      return
    }

    onComplete(data.recipients, false)
    onClose()
  })

const onCancel = () => {
  reset({ recipients: originalRecipients.current })
  onComplete(originalRecipients.current, false) 
  onClose()
}

  return (
    <Backdrop>
      <Modal>
        <Upbanner>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              width: '100%',
            }}
          >
            <h3>받는 사람</h3>
            <p style={{ fontSize: '0.85rem', color: '#555' }}>
              * 최대 10명까지 추가할 수 있어요.
              <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </p>
            <button
              type="button"
              onClick={() => {
                if (fields.length >= 10) {
                  alert('최대 10명까지 추가할 수 있어요.')
                  return
                }
                append({ name: '', phone: '', quantity: 1 })
                setTimeout(() => {
                  listEndRef.current?.scrollIntoView({ behavior: 'smooth' })
                }, 0)
              }}
              style={{
                border: '1px solid #ddd',
                background: '#f5f5f5',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}
            >
              추가하기
            </button>
          </div>
        </Upbanner>
        <Content>
          {fields.map((field, index) => (
            <div key={field.id} style={{ marginBottom: '2rem' }}>
              <FormRow
                style={{
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <h4 style={{ fontWeight: 600, margin: 0 }}>
                  받는 사람 {index + 1}
                </h4>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(index)
                    const newList = getValues('recipients') 
                    onComplete(newList,false) 
                  }}
                  style={{
                    color: '#999',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  X
                </button>
              </FormRow>

              <FormRow>
                <label style={{ color: '#666' }}>이름</label>
                <input
                  placeholder="이름을 입력하세요."
                  {...register(`recipients.${index}.name`, {
                    required: '이름은 필수입니다.',
                  })}
                />
              </FormRow>

              <FormRow>
                <label style={{ color: '#666' }}>전화번호</label>
                <input
                  placeholder="전화번호를 입력하세요."
                  {...register(`recipients.${index}.phone`, {
                    required: '전화번호를 입력해주세요.',
                    pattern: {
                      value: phoneRegex,
                      message: '올바른 전화번호 형식이 아니에요.',
                    },
                  })}
                />
              </FormRow>

              <FormRow>
                <label style={{ color: '#666' }}>수량</label>
                <input
                  type="number"
                  min="1"
                  {...register(`recipients.${index}.quantity`, {
                    valueAsNumber: true,
                    min: { value: 1, message: '수량은 1개 이상이어야 합니다.' },
                  })}
                />
              </FormRow>
              {errors.recipients?.[index]?.quantity && (
                <div style={{ color: 'red', fontSize: '0.8rem' }}>
                  {errors.recipients[index].quantity?.message}
                </div>
              )}
            </div>
          ))}
          <div ref={listEndRef} />
        </Content>

        <Footer>
          <Button onClick={onCancel}>취소</Button>
          <Button primary onClick={onFinish}>
            완료 ({fields.length}명)
          </Button>
        </Footer>
      </Modal>
    </Backdrop>
  )
}
