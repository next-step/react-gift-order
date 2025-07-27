import * as S from './ReceiverInput.styles';
import type {
  FieldError,
  UseFormRegister,
  UseFormGetValues,
} from 'react-hook-form';
import type { Order } from '../../hooks/useOrderForm';
import MyButton from '@/components/button/button';

interface ReceiverInputProps {
  index: number;
  register: UseFormRegister<Order>;
  getValues: UseFormGetValues<Order>;
  error?: {
    receiver?: FieldError;
    phone?: FieldError;
    quantity?: FieldError;
  };
  onRemove: () => void;
}

interface ReceiverInputProps {
  index: number;
  register: UseFormRegister<Order>;
  getValues: UseFormGetValues<Order>;
  error?: {
    receiver?: FieldError;
    phone?: FieldError;
    quantity?: FieldError;
  };
  onRemove: () => void;
}

const ReceiverInput = ({
  index,
  register,
  error,
  onRemove,
  getValues,
}: ReceiverInputProps) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>받는 사람 {index + 1}</S.Title>
        <MyButton onClick={onRemove} size="small" variant="outlined">
          삭제
        </MyButton>
      </S.TitleContainer>

      <S.InputContainer>
        <S.InputLabel>이름</S.InputLabel>
        <S.InputText
          placeholder="이름"
          {...register(`receivers.${index}.receiver`, {
            required: '이름을 입력해주세요',
          })}
          isError={!!error?.receiver}
        />
        {error?.receiver && <S.ErrorText>{error.receiver.message}</S.ErrorText>}
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel>전화번호</S.InputLabel>
        <S.InputText
          placeholder="전화번호"
          {...register(`receivers.${index}.phone`, {
            required: '전화번호를 입력해주세요',
            pattern: {
              value: /^010\d{8}$/,
              message: '전화번호 형식이 올바르지 않습니다',
            },
            validate: (currentValue) => {
              const receivers = getValues('receivers');
              const phoneNumbers = receivers.map((receiver) => receiver.phone);
              const sameNumberCount = phoneNumbers.filter(
                (phone) => phone === currentValue
              ).length;
              if (sameNumberCount > 1) {
                return '중복된 전화번호가 있습니다.';
              }
              return true;
            },
          })}
          isError={!!error?.phone}
        />
        {error?.phone && <S.ErrorText>{error.phone.message}</S.ErrorText>}
      </S.InputContainer>

      <S.InputContainer>
        <S.InputLabel>수량</S.InputLabel>
        <S.InputText
          type="number"
          placeholder="수량"
          {...register(`receivers.${index}.quantity`, {
            required: '수량을 입력해주세요',
            min: {
              value: 1,
              message: '수량은 최소 1개 이상이어야 합니다',
            },
          })}
          isError={!!error?.quantity}
        />
        {error?.quantity && <S.ErrorText>{error.quantity.message}</S.ErrorText>}
      </S.InputContainer>
      <S.Divider />
    </S.Container>
  );
};

export default ReceiverInput;
