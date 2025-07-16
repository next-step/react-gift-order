import { useFieldArray, useFormContext } from 'react-hook-form';
import SectionTitle from '@/components/SectionTitle';
import Modal from '@/components/Modal';
import ReceiverModal from './ReceiverModal';
import { useState } from 'react';
import * as S from './ReceiverSection.styles';

const ReceiverSection = () => {
  const { register, control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'receivers' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const receivers = watch('receivers');

  return (
    <S.Section>
      <SectionTitle title="받는 사람" />
      {receivers.length === 0 && (
        <S.EmptyText>받는 사람이 없습니다. 받는 사람을 추가해주세요.</S.EmptyText>
      )}
      {fields.map((field, index) => (
        <S.ReceiverBox key={field.id}>
          <S.ReceiverTitle>받는 사람 {index + 1}</S.ReceiverTitle>
          <S.DeleteButton type="button" onClick={() => remove(index)}>
            ❌
          </S.DeleteButton>
          <S.Field>
            <S.Label>이름</S.Label>
            <S.Input {...register(`receivers.${index}.receiverName`)} />
          </S.Field>
          <S.Field>
            <S.Label>전화번호</S.Label>
            <S.Input {...register(`receivers.${index}.receiverPhone`)} />
          </S.Field>
          <S.Field>
            <S.Label>수량</S.Label>
            <S.Input
              type="number"
              {...register(`receivers.${index}.quantity`, { valueAsNumber: true })}
            />
          </S.Field>
        </S.ReceiverBox>
      ))}
      <S.AddButton type="button" onClick={() => setIsModalOpen(true)}>
        추가
      </S.AddButton>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ReceiverModal
            onAdd={(data) => {
              append(data);
              setIsModalOpen(false);
            }}
            onClose={() => setIsModalOpen(false)}
            disabled={fields.length >= 10}
          />
        </Modal>
      )}
    </S.Section>
  );
};

export default ReceiverSection;
