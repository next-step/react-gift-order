import { useState } from 'react'
import { useSender } from '@/hooks/useSender'
import { useReceiver } from '@/hooks/useReceiver'
import { useCardMessage } from '@/hooks/useCardMessage'

export function useOrderForm() {
  const sender = useSender()
  const { receiver, receiverPhone, quantity } = useReceiver()
  const card = useCardMessage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isFormValid =
    !sender.error &&
    !receiver.error &&
    !receiverPhone.error &&
    !card.error &&
    !quantity.error

  const resetForm = () => {
    sender.set('')
    receiver.set('')
    receiverPhone.set('')
    card.setMessage('')
    quantity.set(1)
    setIsSubmitted(false)
  }

  return {
    sender,
    receiver,
    receiverPhone,
    quantity,
    card,
    isSubmitted,
    setIsSubmitted,
    isFormValid,
    resetForm,
  }
}
