import styled from '@emotion/styled'
import { cardMock } from '@/pages/OrderPage/cardMock'
import type { Product } from '@/types/product'
import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

import { CardSelector } from './CardSelector'
import { SelectedCard } from './SelectedCard'
import { SenderInput } from './SenderInput'
import { ReceiverSection } from './ReceiverSection'
import { ReceiverModal } from './ReceiverModal'
import { ProductInfo } from './ProductInfo'

interface OrderFormProps {
  product: Product
}

export interface ReceiverInfo {
  name: string
  phone: string
  quantity: number
}
export interface FormValues {
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

    if (!isValid) return

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
      <CardSelector
        selectedCard={selectedCard}
        onSelectCard={(card) => {
          setSelectedCard(card)
          setValue('message', card.defaultTextMessage)
        }}
      />

      <SelectedCard
        selectedCard={selectedCard}
        register={register}
        messageError={errors.message}
      />

      <SenderInput register={register} error={errors.sender} />

      <ReceiverSection
        receivers={finalReceivers}
        onAddClick={() => setShowReceiverModal(true)}
      />

      {showReceiverModal && (
        <ReceiverModal
          fields={fields}
          register={register}
          errors={errors}
          append={append}
          remove={remove}
          onClose={() => setShowReceiverModal(false)}
          onSave={validateAndSaveReceivers}
        />
      )}

      <ProductInfo product={product} />

      <OrderButton type="submit">
        {totalPrice.toLocaleString()}원 주문하기
      </OrderButton>
    </form>
  )
}

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
