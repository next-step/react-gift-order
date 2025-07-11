import {
  RecieverContainer,
  RecieverTitle,
  InputContainer,
  RecieverInputLabel,
  RecieverInput,
} from '@/styles/Order/Reciever.styles';
import { ErrorContainer } from '@/styles/Login.styles';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormValues } from '@/pages/Order/Order';

type RecieverProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};
function Reciever({
  register,
  errors,
}: RecieverProps) {
  return (
    <RecieverContainer>
      <RecieverTitle>받는 사람</RecieverTitle>
      <InputContainer>
        <RecieverInputLabel>이름</RecieverInputLabel>
        <RecieverInput placeholder="이름을 입력하세요." {...register('reciever.name', { 
          validate: (value) => {
            if (value.length < 1) return '이름을 입력해주세요.';
            return true;
          }
        })} />
      </InputContainer>
      {errors.reciever?.name && <ErrorContainer>{errors.reciever.name.message}</ErrorContainer>}
      <InputContainer>
        <RecieverInputLabel>전화번호</RecieverInputLabel>
        <RecieverInput placeholder="전화번호를 입력하세요." {...register('reciever.phone', { 
          validate: (value) => {
            if (value.length < 1) return '전화번호를 입력해주세요.';
            if (!/^01[016789][0-9]{3,4}[0-9]{4}$/.test(value.replace(/-/g, ''))) {
              return '올바른 전화번호 형식이 아닙니다.';
            }
            return true;
          }
        })} />
      </InputContainer>
      {errors.reciever?.phone && <ErrorContainer>{errors.reciever.phone.message}</ErrorContainer>}
      <InputContainer>
        <RecieverInputLabel>수량</RecieverInputLabel>
        <RecieverInput type="number" {...register('count', { 
          validate: (value) => {
            if (value < 1) return '구매 수량은 1개 이상이어야 합니다.';
            return true;
          }
        })} />
      </InputContainer>
      {errors.count && <ErrorContainer>{errors.count.message}</ErrorContainer>}
    </RecieverContainer>
  );
}

export default Reciever;
