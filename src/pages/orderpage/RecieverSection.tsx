/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormValues {
  message: string;
  sender: string;
  receiver: string;
  phone: string;
  quantity: number;
}

interface Props {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const ReceiverInfoSection = ({ register, errors }: Props) => {
  return (
    <>
      <Title>받는 사람</Title>
      <FormRow>
        <Label>이름</Label>
        <Input {...register("receiver")} placeholder="이름을 입력하세요." />
      </FormRow>
      {errors.receiver && <ErrorText>{errors.receiver.message}</ErrorText>}

      <FormRow>
        <Label>전화번호</Label>
        <Input {...register("phone")} placeholder="전화번호를 입력하세요." />
      </FormRow>
      {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}

      <FormRow>
        <Label>수량</Label>
        <Input type="number" {...register("quantity")} />
      </FormRow>
      {errors.quantity && <ErrorText>{errors.quantity.message}</ErrorText>}
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
