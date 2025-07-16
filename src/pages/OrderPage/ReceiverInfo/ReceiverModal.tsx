import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReceiverSchema } from '@/pages/OrderPage/schemas/orderSchema';
import { z } from 'zod';
import * as S from './ReceiverModal.styles';

type ReceiverFormType = z.infer<typeof ReceiverSchema>;

interface ReceiverModalProps {
  onClose: () => void;
  onAdd: (data: ReceiverFormType) => void;
  disabled: boolean;
}

const ReceiverModal = ({ onClose, onAdd, disabled }: ReceiverModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ReceiverSchema),
  });

  const onSubmit = (data: ReceiverFormType) => {
    if (!disabled) onAdd(data);
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.Title>받는 사람 추가</S.Title>
        <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
          <S.Field>
            <S.Label>이름</S.Label>
            <S.Input {...register('receiverName')} />
            {errors.receiverName && <S.ErrorMessage>{errors.receiverName.message}</S.ErrorMessage>}
          </S.Field>
          <S.Field>
            <S.Label>전화번호</S.Label>
            <S.Input {...register('receiverPhone')} />
            {errors.receiverPhone && (
              <S.ErrorMessage>{errors.receiverPhone.message}</S.ErrorMessage>
            )}
          </S.Field>
          <S.Field>
            <S.Label>수량</S.Label>
            <S.Input
              type="number"
              defaultValue={1}
              {...register('quantity', { valueAsNumber: true })}
            />
            {errors.quantity && <S.ErrorMessage>{errors.quantity.message}</S.ErrorMessage>}
          </S.Field>
          <S.ButtonRow>
            <S.Button type="submit" disabled={disabled}>
              추가하기
            </S.Button>
            <S.Button type="button" variant="secondary" onClick={onClose}>
              닫기
            </S.Button>
          </S.ButtonRow>
        </S.StyledForm>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default ReceiverModal;
