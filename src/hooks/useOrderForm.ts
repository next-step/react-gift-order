import { useState } from 'react'
import { useFieldArray } from 'react-hook-form'
import type { UseFormReturn } from 'react-hook-form'
import { cardMock } from '@/pages/OrderPage/cardMock'
import type { FormValues, ReceiverInfo } from '@/components/OrderPage/OrderForm'
import type { Product } from '@/types/product'

export function useOrderForm(
  form: UseFormReturn<FormValues>,
  product: Product
) {
  const { control, setValue, getValues, trigger, reset } = form

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

  return {
    fields,
    append,
    remove,
    showReceiverModal,
    setShowReceiverModal,
    selectedCard,
    setSelectedCard,
    finalReceivers,
    setFinalReceivers,
    totalQuantity,
    totalPrice,
    onSubmit,
    validateAndSaveReceivers,
  }
}
