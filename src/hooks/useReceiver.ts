import { useState, useMemo } from 'react'

export function useReceiver() {
  const [receiver, setReceiver] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [quantity, setQuantity] = useState(1)

  const receiverError = useMemo(() => {
    if (!receiver) return '받는 사람 이름을 입력해주세요.'
    return ''
  }, [receiver])

  const phoneRegex = /^010\d{8}$/
  const receiverPhoneError = useMemo(() => {
    if (!receiverPhone) return '받는 사람 전화번호를 입력해주세요.'
    if (!phoneRegex.test(receiverPhone))
      return '올바른 전화번호 형식이 아닙니다.'
    return ''
  }, [receiverPhone])

  const quantityError = useMemo(() => {
    if (quantity < 1) return '수량은 1개 이상이어야 합니다.'
    return ''
  }, [quantity])

  return {
    receiver: {
      value: receiver,
      set: setReceiver,
      error: receiverError,
    },
    receiverPhone: {
      value: receiverPhone,
      set: setReceiverPhone,
      error: receiverPhoneError,
    },
    quantity: {
      value: quantity,
      set: setQuantity,
      error: quantityError,
    },
  }
}
