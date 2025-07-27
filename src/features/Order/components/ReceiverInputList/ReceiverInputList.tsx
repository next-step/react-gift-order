import ReceiverInput from '../ReceiverInput/ReceiverInput';
import type { Order } from '@/features/Order/hooks/useOrderForm';
import type {
  UseFormRegister,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldArrayWithId,
  UseFormGetValues,
} from 'react-hook-form';
import * as S from './ReceiverInputList.styles';

interface ReceiverInputListProps {
  fields: FieldArrayWithId<Order, 'receivers', 'id'>[];
  register: UseFormRegister<Order>;
  errors: FieldErrors<Order>;
  append: UseFieldArrayAppend<Order, 'receivers'>;
  remove: UseFieldArrayRemove;
  getValues: UseFormGetValues<Order>;
}

const ReceiverInputList = ({
  fields,
  register,
  errors,
  remove,
  getValues,
}: ReceiverInputListProps) => {
  return (
    <S.ListContainer>
      {fields.map((field, i) => (
        <ReceiverInput
          key={field.id}
          index={i}
          register={register}
          error={errors.receivers?.[i]}
          onRemove={() => remove(i)}
          getValues={getValues}
        />
      ))}
    </S.ListContainer>
  );
};

export default ReceiverInputList;
