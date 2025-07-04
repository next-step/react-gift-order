/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";

const ReceiverInfoSection = () => {
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Title>받는 사람</Title>
      <FormRow>
        <Label>이름</Label>
        <Input
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
          placeholder="이름을 입력하세요."
        />
      </FormRow>
      <FormRow>
        <Label>전화번호</Label>
        <Input
          value={receiverPhone}
          onChange={(e) => setReceiverPhone(e.target.value)}
          placeholder="전화번호를 입력하세요."
        />
      </FormRow>
      <FormRow>
        <Label>수량</Label>
        <Input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </FormRow>
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
