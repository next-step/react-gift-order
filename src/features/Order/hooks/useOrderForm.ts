import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { orderSchema } from '../schema/orderSchema'
import type { Order } from '../schema/orderSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface UseOrderFormParams {
  defaultMessage: string
  productName: string
  sellingPrice: number
  selectedCardId: number
  selectedCardMessage: string
}

export const useOrderForm = ({
  defaultMessage,
  productName,
  sellingPrice,
  selectedCardId,
  selectedCardMessage,
}: UseOrderFormParams) => {
  const navigate = useNavigate()

  const methods = useForm<Order>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      message: defaultMessage,
      sender: '',
      receivers: [],
    },
    mode: 'onChange',
  })

  const {
    control,
    register,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = methods

  const [totalPrice, setTotalPrice] = useState(0)

  const confirmReceivers = () => {
    const confirmed = getValues('receivers') || []
    const price = confirmed.reduce(
      (sum, r) => sum + r.quantity * sellingPrice,
      0
    )
    setTotalPrice(price)
  }

  useEffect(() => {
    setValue('message', selectedCardMessage || '')
  }, [selectedCardId, selectedCardMessage, setValue])

  const onSubmit = handleSubmit((data) => {
    const totalQuantity = data.receivers.reduce(
      (sum, r) => sum + Number(r.quantity),
      0
    )

    alert(`주문이 완료되었습니다.
상품명: ${productName}
총 수량: ${totalQuantity}
발신자 이름: ${data.sender}
메시지: ${data.message}`)

    navigate('/')
  })

  return {
    methods,
    register,
    onSubmit,
    errors,
    confirmReceivers,
    totalPrice,
    control,
    getValues,
    trigger,
  }
}
