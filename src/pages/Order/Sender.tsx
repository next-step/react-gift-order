import { SenderContainer, SenderTitle, SenderInput } from '@/styles/Order/Sender.styles';
import { ErrorContainer } from '@/styles/Login.styles';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormValues } from '@/pages/Order/Order';

type SenderProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};
function Sender({ register, errors }: SenderProps) {
  return (
    <SenderContainer>
      <SenderTitle>보내는 사람</SenderTitle>
      <SenderInput placeholder="이름 입력" {...register('sender', { 
        validate: (value) => {
          if (value.length < 1) return '이름을 입력해주세요.';
          return true;
        }
      })} />
      {errors.sender && <ErrorContainer>{errors.sender.message}</ErrorContainer>}
    </SenderContainer>
  );
}

export default Sender;
