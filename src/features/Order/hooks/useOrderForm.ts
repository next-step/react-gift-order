import { useState } from 'react'

interface Order {
  message: string
  sender: string
  receiver: string
  phone: string
  quantity: number
}

interface OrderError {
  message?: string
  sender?: string
  receiver?: string
  phone?: string
  quantity?: string
}

export const useOrderForm = (defaultMessage: string) => {
  const [order, setOrderState] = useState<Order>({
    message: defaultMessage,
    sender: '',
    receiver: '',
    phone: '',
    quantity: 1,
  })

  const [errors, setErrors] = useState<OrderError>({})

  const setOrder = (newData: Partial<Order>) => {
    setOrderState((prev) => ({ ...prev, ...newData }))
  }

  const validate = (): boolean => {
    const newErrors: OrderError = {}
    const phoneRegex = /^010\d{8}$/

    if (!order.message) newErrors.message = '메세지를 입력해주세요.'
    if (!order.sender) newErrors.sender = '이름을 입력해주세요.'
    if (!order.receiver) newErrors.receiver = '이름을 입력해주세요.'
    if (!order.phone) newErrors.phone = '전화번호를 입력해주세요.'
    else if (!phoneRegex.test(order.phone))
      newErrors.phone = '올바른 전화번호 형식이 아닙니다.'
    if (order.quantity < 1)
      newErrors.quantity = '구매 수량은 1개 이상이어야 합니다.'

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  return { order, errors, setOrder, validate }
}
