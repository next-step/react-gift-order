/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
interface Props {
  receiver: string;
  onChangeReceiver: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phone: string;
  onChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  onChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorReceiver?: string;
  errorPhone?: string;
  errorQuantity?: string;
}

const ReceiverInfoSection = ({
  receiver,
  onChangeReceiver,
  phone,
  onChangePhone,
  quantity,
  onChangeQuantity,
  errorReceiver,
  errorPhone,
  errorQuantity,
}: Props) => {
  return (
    <>
      <Title>받는 사람</Title>
      <FormRow>
        <Label>이름</Label>
        <Input
          value={receiver}
          onChange={onChangeReceiver}
          placeholder="이름을 입력하세요."
        />
      </FormRow>
      {errorReceiver && <ErrorText>{errorReceiver}</ErrorText>}

      <FormRow>
        <Label>전화번호</Label>
        <Input
          value={phone}
          onChange={onChangePhone}
          placeholder="전화번호를 입력하세요."
        />
      </FormRow>
      {errorPhone && <ErrorText>{errorPhone}</ErrorText>}

      <FormRow>
        <Label>수량</Label>
        <Input
          type="number"
          min={1}
          value={quantity}
          onChange={onChangeQuantity}
        />
      </FormRow>
      {errorQuantity && <ErrorText>{errorQuantity}</ErrorText>}
    </>
  );
};

const Title = styled.div`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  text-align: left;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
`;

const Label = styled.label`
  width: 70px;
  font-size: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

export default ReceiverInfoSection;

const ErrorText = styled.p`
  margin: 4px 0 12px 70px;
  color: red;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  text-align: left;
`;
