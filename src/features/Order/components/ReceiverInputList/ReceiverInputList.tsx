import ReceiverInput from '../ReceiverInput/ReceiverInput'
import type { Order } from '@/features/Order/schema/orderSchema'
import {
  type UseFieldArrayRemove,
  type FieldArrayWithId,
} from 'react-hook-form'
import * as S from './ReceiverInputList.styles'

interface ReceiverInputListProps {
  fields: FieldArrayWithId<Order, 'receivers', 'id'>[]
  remove: UseFieldArrayRemove
}

const ReceiverInputList = ({ fields, remove }: ReceiverInputListProps) => {
  return (
    <S.ListContainer>
      {fields.map((field, i) => (
        <ReceiverInput key={field.id} index={i} onRemove={() => remove(i)} />
      ))}
    </S.ListContainer>
  )
}

export default ReceiverInputList
