import { SenderContainer, SenderTitle, SenderInput } from '@/styles/Order/Sender.styles';
import { ErrorContainer } from '@/styles/Login.styles';
import type { ErrorType } from '@/hooks/useOrder';

type SenderProps = {
  errors: ErrorType;
  handleSenderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Sender({ errors, handleSenderChange }: SenderProps) {
  return (
    <SenderContainer>
      <SenderTitle>보내는 사람</SenderTitle>
      <SenderInput placeholder="이름 입력" onChange={handleSenderChange} />
      {errors.sender && <ErrorContainer>{errors.sender}</ErrorContainer>}
    </SenderContainer>
  );
}

export default Sender;
