import styled from '@emotion/styled'
import { cardMock } from '@/pages/OrderPage/cardMock'
import type { Product } from '@/types/product'
import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

interface OrderFormProps {
  product: Product
}

interface ReceiverInfo {
  name: string
  phone: string
  quantity: number
}

interface FormValues {
  sender: string
  message: string
  receivers: ReceiverInfo[]
}

export function OrderForm({ product }: OrderFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      sender: '',
      message: cardMock[0].defaultTextMessage,
      receivers: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  })

  const [showReceiverModal, setShowReceiverModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState(cardMock[0])
  const [finalReceivers, setFinalReceivers] = useState<ReceiverInfo[]>([])

  const totalQuantity = finalReceivers.reduce(
    (acc, receiver) => acc + Number(receiver.quantity || 0),
    0
  )
  const totalPrice = product.price.sellingPrice * totalQuantity
  const message = watch('message')

  const onSubmit = (data: FormValues) => {
    alert(`주문이 완료되었습니다.
      상품명: ${product.name}
      구매 수량: ${totalQuantity}
      발신자 이름: ${data.sender}
      메시지: ${data.message}`)
    reset()
    setSelectedCard(cardMock[0])
    setValue('message', cardMock[0].defaultTextMessage)
    setFinalReceivers([])
  }

  const validateAndSaveReceivers = async () => {
    const isValid = await trigger('receivers')

    if (!isValid) {
      return
    }

    const receivers = getValues('receivers')
    const phones = receivers.map((r) => r.phone)
    const hasDuplicatePhone = new Set(phones).size !== phones.length

    if (hasDuplicatePhone) {
      alert('중복된 전화번호가 있습니다.')
      return
    }

    setFinalReceivers(receivers)
    setShowReceiverModal(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardList>
        {cardMock.map((cardItem) => (
          <CardThumbnail
            key={cardItem.id}
            src={cardItem.thumbUrl}
            alt="card"
            onClick={() => {
              setSelectedCard(cardItem)
              setValue('message', cardItem.defaultTextMessage)
            }}
            selected={selectedCard.id === cardItem.id}
          />
        ))}
      </CardList>

      <SelectedCard>
        <img src={selectedCard.imageUrl} alt="selected" />
        <textarea
          {...register('message', {
            required: '메시지를 입력해주세요.',
          })}
          value={message}
          onChange={(e) => setValue('message', e.target.value)}
          placeholder="메시지를 입력해주세요."
        />
        {errors.message && <Error>{errors.message.message}</Error>}
      </SelectedCard>

      <PersonSection>
        <SectionTitle>보내는 사람</SectionTitle>
        <input
          {...register('sender', {
            required: '이름을 입력해주세요.',
          })}
          placeholder="이름을 입력하세요."
        />
        {errors.sender && <Error>{errors.sender.message}</Error>}
      </PersonSection>

      <PersonSection>
        <SectionTitle>받는 사람</SectionTitle>
        <AddButton type="button" onClick={() => setShowReceiverModal(true)}>
          추가
        </AddButton>
      </PersonSection>

      {finalReceivers.map((r, i) => (
        <ReceiverSummary key={i}>
          {r.name} ({r.phone}) - {r.quantity}개
        </ReceiverSummary>
      ))}

      {showReceiverModal && (
        <ModalOverlay>
          <ModalContainer>
            <ReceiverModal>
              <ReceiverModalHeader>
                <strong>받는 사람</strong>
              </ReceiverModalHeader>

              {fields.map((field, index) => (
                <ReceiverInputGroup key={field.id}>
                  <div>
                    <input
                      placeholder="이름"
                      {...register(`receivers.${index}.name` as const, {
                        required: '이름을 입력해주세요.',
                      })}
                    />
                    {errors.receivers?.[index]?.name && (
                      <Error>{errors.receivers[index]?.name?.message}</Error>
                    )}
                  </div>

                  <div>
                    <input
                      placeholder="전화번호"
                      {...register(`receivers.${index}.phone` as const, {
                        required: '전화번호를 입력해주세요.',
                        pattern: {
                          value: /^010\d{8}$/,
                          message: '올바른 전화번호 형식이 아니에요.',
                        },
                      })}
                    />
                    {errors.receivers?.[index]?.phone && (
                      <Error>{errors.receivers[index]?.phone?.message}</Error>
                    )}
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="수량"
                      {...register(`receivers.${index}.quantity` as const, {
                        required: '수량을 입력해주세요.',
                        min: {
                          value: 1,
                          message: '구매 수량은 1개 이상이어야 해요.',
                        },
                      })}
                    />
                    {errors.receivers?.[index]?.quantity && (
                      <Error>
                        {errors.receivers[index]?.quantity?.message}
                      </Error>
                    )}
                  </div>

                  <button type="button" onClick={() => remove(index)}>
                    삭제
                  </button>
                </ReceiverInputGroup>
              ))}

              {fields.length < 10 && (
                <button
                  type="button"
                  onClick={() => append({ name: '', phone: '', quantity: 1 })}
                >
                  추가하기
                </button>
              )}

              <ReceiverModalFooter>
                <button
                  type="button"
                  onClick={() => setShowReceiverModal(false)}
                >
                  취소
                </button>
                <button type="button" onClick={validateAndSaveReceivers}>
                  {fields.length}명 완료
                </button>
              </ReceiverModalFooter>
            </ReceiverModal>
          </ModalContainer>
        </ModalOverlay>
      )}

      <ProductInfo>
        <SectionTitle>상품 정보</SectionTitle>
        <ProductBox>
          <ProductImage src={product.imageURL} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brandInfo.name}</ProductBrand>
            <ProductPrice>
              {product.price.sellingPrice.toLocaleString()}원
            </ProductPrice>
          </ProductDetails>
        </ProductBox>
      </ProductInfo>

      <OrderButton type="submit">
        {totalPrice.toLocaleString()}원 주문하기
      </OrderButton>
    </form>
  )
}

const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin-bottom: 20px;
`

const CardThumbnail = styled.img<{ selected: boolean }>`
  width: 100px;
  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.gray1000 : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`

const SelectedCard = styled.div`
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

const PersonSection = styled.div`
  margin-top: 34px;

  input {
    flex: 1;
    width: 100%;
    padding: 10px;
    margin-top: 14px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`

const SectionTitle = styled.label`
  font-weight: 600;
`

export const AddButton = styled.button`
  font-size: 14px;
  background: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  color: black;
  cursor: pointer;
`

export const ReceiverSummary = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #333;
`
const ModalOverlay = styled.div`
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

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1000;
`

export const ReceiverModal = styled.div`
  background-color: white;
`

export const ReceiverModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const ReceiverInputGroup = styled.div`
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

export const ReceiverModalFooter = styled.div`
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

const ProductInfo = styled.div`
  margin-top: 34px;
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
  }
`

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 8px;
  margin-top: 8px;
`

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ProductName = styled.div`
  font-size: 14px;
  font-weight: 600;
`

const ProductBrand = styled.div`
  font-size: 12px;
  color: #666;
`

const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDefault};
`

const OrderButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
  cursor: pointer;
`

const Error = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 14px;
  color: red;
`
