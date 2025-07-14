import * as S from './ReceiverModal.styles'
import ReceiverInputList from '../ReceiverInputList/ReceiverInputList'
import MyButton from '@/component/Button/Button'
import type { Order } from '@/features/Order/schema/orderSchema'
import { useFormContext, useFieldArray } from 'react-hook-form'

interface ReceiverModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

const ReceiverModal = ({ isOpen, onClose, onComplete }: ReceiverModalProps) => {
  if (!isOpen) return null

  const { control, trigger } = useFormContext<Order>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  })

  const handleComplete = async () => {
    const isValid = await trigger('receivers')
    if (!isValid) return
    onComplete()
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <S.Title>받는 사람</S.Title>
        <S.SubTitle>
          * 최대 10명까지 추가 할 수 있어요. <br />* 받는 사람의 전화번호를
          중복으로 입력할 수 없어요.
        </S.SubTitle>

        <S.Wrapper>
          <MyButton
            type="button"
            onClick={() =>
              append({
                receiver: '',
                phone: '',
                quantity: 1,
              })
            }
            disabled={fields.length >= 10}
            variant="secondory"
            size="verySmall"
          >
            추가하기
          </MyButton>
        </S.Wrapper>

        <ReceiverInputList fields={fields} remove={remove} />

        <S.ButtonConatiner>
          <MyButton onClick={onClose} variant="secondory" size="medium">
            닫기
          </MyButton>
          <MyButton
            type="button"
            variant="primary"
            size="medium"
            fullWidth
            onClick={handleComplete}
          >
            {fields.length}명 완료
          </MyButton>
        </S.ButtonConatiner>
      </S.Content>
    </S.Overlay>
  )
}

export default ReceiverModal
