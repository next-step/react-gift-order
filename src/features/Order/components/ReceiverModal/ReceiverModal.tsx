import * as S from './ReceiverModal.styles';
import ReceiverInputList from '../ReceiverInputList/ReceiverInputList';
import MyButton from '@/components/button/button';
import type { Order } from '@/features/Order/hooks/useOrderForm';
import type {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormTrigger,
  UseFormGetValues,
} from 'react-hook-form';

interface ReceiverModalProps {
  isOpen: boolean;
  onClose: () => void;
  fields: FieldArrayWithId<Order, 'receivers', 'id'>[];
  register: UseFormRegister<Order>;
  trigger: UseFormTrigger<Order>;
  errors: FieldErrors<Order>;
  append: UseFieldArrayAppend<Order, 'receivers'>;
  remove: UseFieldArrayRemove;
  onComplete: () => void;
  getValues: UseFormGetValues<Order>;
}

const ReceiverModal = ({
  isOpen,
  onClose,
  fields,
  register,
  trigger,
  errors,
  append,
  remove,
  onComplete,
  getValues,
}: ReceiverModalProps) => {
  if (!isOpen) return null;

  const handleComplete = async () => {
    const isValid = await trigger('receivers');
    if (!isValid) return;
    onComplete();
    onClose();
  };

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
            size="small"
          >
            추가하기
          </MyButton>
        </S.Wrapper>

        <ReceiverInputList
          fields={fields}
          register={register}
          errors={errors}
          append={append}
          remove={remove}
          getValues={getValues}
        />

        <S.ButtonContainer>
          <MyButton onClick={onClose} size="medium">
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
        </S.ButtonContainer>
      </S.Content>
    </S.Overlay>
  );
};

export default ReceiverModal;
