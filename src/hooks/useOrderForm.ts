import { useState, useEffect } from 'react'

const phoneRegex = /^010\d{8}$/

function validatePhone(value: string) {
  return phoneRegex.test(value)
}

export default function useOrderForm(initialMessage: string) {
  const [message, setMessage] = useState(initialMessage)
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState({ name: '', phone: '', qty: 1 })

  const [messageError, setMessageError] = useState('')
  const [senderError, setSenderError] = useState('')
  const [receiverNameError, setReceiverNameError] = useState('')
  const [receiverPhoneError, setReceiverPhoneError] = useState('')
  const [qtyError, setQtyError] = useState('')
  const [isValid, setIsValid] = useState(false)

  const checkValidity = () => {
    setIsValid(
      !!message &&
        !!sender &&
        !!receiver.name &&
        validatePhone(receiver.phone) &&
        receiver.qty >= 1,
    )
  }

  useEffect(() => {
    checkValidity()
  }, [message, sender, receiver])

  const handleMessageBlur = () => {
    if (!message) {
      setMessageError('메시지를 입력해주세요.')
    } else {
      setMessageError('')
    }
    checkValidity()
  }

  const handleSenderBlur = () => {
    if (!sender) {
      setSenderError('보내는 사람을 입력해주세요.')
    } else {
      setSenderError('')
    }
    checkValidity()
  }

  const handleReceiverNameBlur = () => {
    if (!receiver.name) {
      setReceiverNameError('받는 사람을 입력해주세요.')
    } else {
      setReceiverNameError('')
    }
    checkValidity()
  }

  const handleReceiverPhoneBlur = () => {
    if (!receiver.phone) {
      setReceiverPhoneError('전화번호를 입력해주세요.')
    } else if (!validatePhone(receiver.phone)) {
      setReceiverPhoneError('전화번호 형식이 올바르지 않습니다.')
    } else {
      setReceiverPhoneError('')
    }
    checkValidity()
  }

  const handleQtyBlur = () => {
    if (receiver.qty < 1) {
      setQtyError('1개 이상 입력해주세요.')
    } else {
      setQtyError('')
    }
    checkValidity()
  }

  return {
    message,
    setMessage,
    sender,
    setSender,
    receiver,
    setReceiver,
    messageError,
    senderError,
    receiverNameError,
    receiverPhoneError,
    qtyError,
    handleMessageBlur,
    handleSenderBlur,
    handleReceiverNameBlur,
    handleReceiverPhoneBlur,
    handleQtyBlur,
    isValid,
  }
}