import { createContext, useContext, useState, type ReactNode } from 'react'
import { useForm, type UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { orderFormSchema, type OrderFormData, type CardData } from '@/entities/order'
import { orderCardMock } from '@/entities/order'

// * 주문 폼 컨텍스트 타입
type OrderFormContextType = {
  // * React Hook Form 메서드들
  form: UseFormReturn<OrderFormData>
  // * 모달 상태 관리
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  // * 추가 유틸리티 메서드들
  handleCardSelect: (card: CardData) => void
  getTotalPrice: (productPrice: number) => number
  resetForm: () => void
}

const OrderFormContext = createContext<OrderFormContextType | undefined>(undefined)

// * 주문 폼 Provider
export function OrderFormProvider({ children }: { children: ReactNode }) {
  // * React Hook Form 설정
  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      cardMessage: orderCardMock[0].defaultTextMessage,
      sender: '',
      receivers: [],
      selectedCard: orderCardMock[0],
    },
    mode: 'onChange', // 실시간 유효성 검사
  })

  const { setValue, watch } = form

  // * 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false)

  // * receivers 데이터 감시
  const receivers = watch('receivers')

  // * 카드 선택 핸들러
  const handleCardSelect = (card: CardData) => {
    setValue('selectedCard', card)
    setValue('cardMessage', card.defaultTextMessage)
  }

  // * 모달 열기
  const openModal = () => {
    setIsModalOpen(true)
  }

  // * 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // * 총 가격 계산 (모든 받는사람 수량 합계)
  const getTotalPrice = (productPrice: number) => {
    const totalCount = receivers.reduce((sum, receiver) => sum + (receiver?.count || 0), 0)
    return productPrice * totalCount
  }

  // * 폼 리셋
  const resetForm = () => {
    form.reset({
      cardMessage: orderCardMock[0].defaultTextMessage,
      sender: '',
      receivers: [
        {
          name: '',
          phone: '',
          count: 1,
        },
      ],
      selectedCard: orderCardMock[0],
    })
    closeModal()
  }

  const value = {
    form,
    isModalOpen,
    openModal,
    closeModal,
    handleCardSelect,
    getTotalPrice,
    resetForm,
  }

  return <OrderFormContext.Provider value={value}>{children}</OrderFormContext.Provider>
}

// * 주문 폼 커스텀 훅
export const useOrderForm = () => {
  const context = useContext(OrderFormContext)
  if (!context) {
    throw new Error('useOrderForm은 반드시 OrderFormProvider 내에서 사용되어야 합니다!')
  }
  return context
}
