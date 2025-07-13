import styled from '@emotion/styled'
import { cardMock } from '@/pages/OrderPage/cardMock'
import type { Product } from '@/types/product'
import { useForm } from 'react-hook-form'

import { CardSelector } from './CardSelector'
import { SelectedCard } from './SelectedCard'
import { SenderInput } from './SenderInput'
import { ReceiverSection } from './ReceiverSection'
import { ReceiverModal } from './ReceiverModal'
import { ProductInfo } from './ProductInfo'

import { useOrderForm } from '@/hooks/useOrderForm'

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
  const form = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      sender: '',
      message: cardMock[0].defaultTextMessage,
      receivers: [],
    },
  })

  const {
    fields,
    append,
    remove,
    showReceiverModal,
    setShowReceiverModal,
    selectedCard,
    setSelectedCard,
    finalReceivers,
    totalPrice,
    onSubmit,
    validateAndSaveReceivers,
  } = useOrderForm(form, product)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = form

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
