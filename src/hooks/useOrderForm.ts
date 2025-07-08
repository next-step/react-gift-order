import { useState, useMemo } from 'react'

export function useOrderForm() {
  const [selectedCard, setSelectedCard] = useState(cardMock[0])
  const [message, setMessage] = useState(selectedCard.defaultTextMessage)
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const senderError = useMemo(() => {
    if (!sender) return '보내는 사람 이름을 입력해주세요.'
    return ''
  }, [sender])

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

  const messageError = useMemo(() => {
    if (!message) return '메시지를 입력해주세요.'
    return ''
  }, [message])

  const quantityError = useMemo(() => {
    if (quantity < 1) return '수량은 1개 이상이어야 합니다.'
    return ''
  }, [quantity])

  const isFormValid =
    !senderError &&
    !receiverError &&
    !receiverPhoneError &&
    !messageError &&
    !quantityError

  const resetForm = () => {
    setSender('')
    setReceiver('')
    setReceiverPhone('')
    setMessage('')
    setQuantity(1)
    setIsSubmitted(false)
  }

  return {
    selectedCard,
    setSelectedCard,
    message,
    setMessage,
    sender,
    setSender,
    receiver,
    setReceiver,
    receiverPhone,
    setReceiverPhone,
    quantity,
    setQuantity,
    isSubmitted,
    setIsSubmitted,
    senderError,
    receiverError,
    receiverPhoneError,
    messageError,
    quantityError,
    isFormValid,
    resetForm,
  }
}
