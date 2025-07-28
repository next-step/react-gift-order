import { useState } from 'react';
import type {
  UseFormRegister,
  FieldErrors,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormTrigger,
  UseFormGetValues,
} from 'react-hook-form';

import MyButton from '@/components/button/button';
import ReceiverModal from '../ReceiverModal/ReceiverModal';
import type { Receiver, Order } from '@/features/Order/hooks/useOrderForm';
import * as S from './ReceiverSection.styles.ts';

interface ReceiverSectionProps {
  fields: FieldArrayWithId<Order, 'receivers', 'id'>[];
  register: UseFormRegister<Order>;
  errors: FieldErrors<Order>;
  append: UseFieldArrayAppend<Order, 'receivers'>;
  remove: UseFieldArrayRemove;
  getValues: UseFormGetValues<Order>;
  trigger: UseFormTrigger<Order>;
}

const ReceiverSection = ({
  fields,
  register,
  errors,
  append,
  remove,
  getValues,
  trigger,
}: ReceiverSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receivers, setReceivers] = useState<Receiver[]>([]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>받는 사람</S.Title>
        <MyButton
          type="button"
          size="small"
          onClick={() => setIsModalOpen(true)}
        >
          추가
        </MyButton>
      </S.TitleContainer>

      {receivers.length === 0 ? (
        <S.EmptyMessage>
          받는 사람이 없습니다. <br />
          받는 사람을 추가해주세요.
        </S.EmptyMessage>
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
        fields={fields}
        register={register}
        trigger={trigger}
        errors={errors}
        append={append}
        remove={remove}
        onComplete={async () => {
          const isValid = await trigger('receivers');
          if (!isValid) return;
          const updatedReceivers = getValues('receivers');
          setReceivers(updatedReceivers);
          setIsModalOpen(false);
        }}
        getValues={getValues}
      />
    </S.Container>
  );
};

export default ReceiverSection;
