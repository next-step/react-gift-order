import {
  Container,
  Title,
  InputContainer,
  InputLabel,
  InputText,
  ErrorText,
} from './ReceiverInput.styles';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { Order, Receiver } from '@/Order/hooks/useOrderForm';

interface ReceiverInputProps {
  index: number;
  register: UseFormRegister<Order>;
  errors?: FieldErrors<Receiver>;
}

const ReceiverInput = ({ index, register, errors }: ReceiverInputProps) => {
  return (
    <Container>
      <Title>받는 사람</Title>

      <InputContainer>
        <InputLabel>이름</InputLabel>
        <InputText
          {...register(`receivers.${index}.receiver`, {
            required: '받는 사람 이름을 입력해주세요.',
          })}
          placeholder="이름을 입력하세요."
        />
        {errors?.receiver?.message && (
          <ErrorText>{errors.receiver.message}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <InputLabel>전화번호</InputLabel>
        <InputText
          {...register(`receivers.${index}.phone`, {
            required: '전화번호를 입력해주세요.',
          })}
          placeholder="전화번호를 입력하세요."
        />
        {errors?.phone?.message && (
          <ErrorText>{errors.phone.message}</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <InputLabel>수량</InputLabel>
        <InputText
          type="number"
          min={1}
          {...register(`receivers.${index}.quantity`, {
            required: '수량을 입력해주세요.',
            min: { value: 1, message: '최소 1개 이상 선택해야 합니다.' },
          })}
          placeholder="구매 수량"
        />
        {errors?.quantity?.message && (
          <ErrorText>{errors.quantity.message}</ErrorText>
        )}
      </InputContainer>
    </Container>
  );
};

export default ReceiverInput;
