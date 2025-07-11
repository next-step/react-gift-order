import {
  RecieverContainer,
  RecieverTitle,
  InputContainer,
  RecieverInputLabel,
  RecieverInput,
} from '@/styles/Order/Reciever.styles';
import { ErrorContainer } from '@/styles/Login.styles';
import type { ErrorType } from '@/hooks/useOrder';

type RecieverProps = {
  count: number;
  errors: ErrorType;
  handleCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRecieverNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRecieverPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Reciever({
  count,
  errors,
  handleCountChange,
  handleRecieverNameChange,
  handleRecieverPhoneChange,
}: RecieverProps) {
  return (
    <RecieverContainer>
      <RecieverTitle>받는 사람</RecieverTitle>
      <InputContainer>
        <RecieverInputLabel>이름</RecieverInputLabel>
        <RecieverInput placeholder="이름을 입력하세요." onChange={handleRecieverNameChange} />
      </InputContainer>
      {errors.recieverName && <ErrorContainer>{errors.recieverName}</ErrorContainer>}
      <InputContainer>
        <RecieverInputLabel>전화번호</RecieverInputLabel>
        <RecieverInput placeholder="전화번호를 입력하세요." onChange={handleRecieverPhoneChange} />
      </InputContainer>
      {errors.recieverPhone && <ErrorContainer>{errors.recieverPhone}</ErrorContainer>}
      <InputContainer>
        <RecieverInputLabel>수량</RecieverInputLabel>
        <RecieverInput type="number" value={count} onChange={handleCountChange} />
      </InputContainer>
      {errors.count && <ErrorContainer>{errors.count}</ErrorContainer>}
    </RecieverContainer>
  );
}

export default Reciever;
