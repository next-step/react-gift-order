import {
  RecieverContainer,
  RecieverTitle,
  InputContainer,
  RecieverInputLabel,
  RecieverInput,
} from '@/styles/Order/Reciever.styles';

type RecieverProps = {
  count: number;
  handleCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRecieverNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRecieverPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Reciever({
  count,
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
      <InputContainer>
        <RecieverInputLabel>전화번호</RecieverInputLabel>
        <RecieverInput placeholder="전화번호를 입력하세요." onChange={handleRecieverPhoneChange} />
      </InputContainer>
      <InputContainer>
        <RecieverInputLabel>수량</RecieverInputLabel>
        <RecieverInput type="number" value={count} onChange={handleCountChange} />
      </InputContainer>
    </RecieverContainer>
  );
}

export default Reciever;
