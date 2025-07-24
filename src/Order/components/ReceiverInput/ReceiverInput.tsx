import {
  Container,
  Title,
  InputContainer,
  InputLabel,
  InputText,
  ErrorText,
} from './ReceiverInput.styles';

interface ReceiverInputProps {
  receiver: string;
  setReceiver: (name: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  errors: {
    receiver: string;
    phoneNumber: string;
    quantity: string;
  };
}

const ReceiverInput = ({
  receiver,
  setReceiver,
  phoneNumber,
  setPhoneNumber,
  quantity,
  setQuantity,
  errors,
}: ReceiverInputProps) => {
  return (
    <Container>
      <Title>받는 사람</Title>
      <InputContainer>
        <InputLabel>이름</InputLabel>
        <InputText
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="이름을 입력하세요."
        />
        {errors.receiver && <ErrorText>{errors.receiver}</ErrorText>}
      </InputContainer>

      <InputContainer>
        <InputLabel>전화번호</InputLabel>
        <InputText
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호를 입력하세요."
        />
        {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <InputLabel>수량</InputLabel>
        <InputText
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="구매 수량"
        />
        {errors.quantity && <ErrorText>{errors.quantity}</ErrorText>}
      </InputContainer>
    </Container>
  );
};

export default ReceiverInput;
