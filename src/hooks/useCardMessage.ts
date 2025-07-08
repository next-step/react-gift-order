import { useState, useMemo } from 'react'
import { cardMock } from '@/pages/OrderPage/cardMock'

export function useCardMessage() {
  const [selectedCard, setSelectedCard] = useState(cardMock[0])
  const [message, setMessage] = useState(selectedCard.defaultTextMessage)

  const error = useMemo(() => {
    if (!message) return '메시지를 입력해주세요.'
    return ''
  }, [message])

  return { selectedCard, message, setMessage, setSelectedCard, error }
}
