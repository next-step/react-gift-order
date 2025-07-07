import {
  SenderContainer,
  SenderTitle,
  SenderInput,
  SenderInfo,
} from '@/styles/Order/Sender.styles';
import { ErrorContainer } from '@/styles/Login.styles';

type SenderProps = {
  sender: string;
  handleSenderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Sender({ sender, handleSenderChange }: SenderProps) {
  return (
    <SenderContainer>
      <SenderTitle>보내는 사람</SenderTitle>
      <SenderInput placeholder="이름 입력" onChange={handleSenderChange} />
      {sender.length > 0 ? (
        <SenderInfo>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SenderInfo>
      ) : (
        <ErrorContainer>이름을 입력해주세요.</ErrorContainer>
      )}
    </SenderContainer>
  );
}

export default Sender;
