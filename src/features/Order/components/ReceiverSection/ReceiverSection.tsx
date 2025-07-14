import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import MyButton from '@/component/Button/Button'
import ReceiverModal from '../ReceiverModal/ReceiverModal'
import type { Order, Receiver } from '@/features/Order/schema/orderSchema'
import * as S from './ReceiverSection.styles'

interface ReceiverSectionProps {
  onConfirm: () => void
}

const ReceiverSection = ({ onConfirm }: ReceiverSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [receivers, setReceivers] = useState<Receiver[]>([])
  const {
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext<Order>()

  const error = errors.receivers

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>받는 사람</S.Title>
        <MyButton
          type="button"
          variant="secondory"
          size="verySmall"
          onClick={() => setIsModalOpen(true)}
        >
          추가
        </MyButton>
      </S.TitleContainer>

      {receivers.length === 0 ? (
        <>
          <S.EmptyMessage>
            받는 사람이 없습니다. <br />
            받는 사람을 추가해주세요.
          </S.EmptyMessage>

          {typeof error?.message === 'string' && (
            <S.ErrorText>{error.message}</S.ErrorText>
          )}
        </>
      ) : (
        <S.List>
          <S.ListHeader>
            <span>받는 사람</span>
            <span>전화번호</span>
            <span>수량</span>
          </S.ListHeader>

          {receivers.map((r, i) => (
            <S.ListItem key={i}>
              <span>{r.receiver}</span>
              <span>{r.phone}</span>
              <span>{r.quantity}개</span>
            </S.ListItem>
          ))}
        </S.List>
      )}

      <ReceiverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onComplete={async () => {
          const isValid = await trigger('receivers')
          if (!isValid) return
          const updatedReceivers = getValues('receivers')
          setReceivers(updatedReceivers)
          onConfirm()
          setIsModalOpen(false)
        }}
      />
    </S.Container>
  )
}

export default ReceiverSection
