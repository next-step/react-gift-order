/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import type { OrderFormValues } from "@/validations/orderSchema";

const ReceiverSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderFormValues>();

  return (
    <Container>
      <Title>받는 사람</Title>

      <Field>
        <Label>이름</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이름을 입력하세요"
            {...register("receiverName")}
          />
          {errors.receiverName && (
            <ErrorText>{errors.receiverName.message}</ErrorText>
          )}
        </InputWrapper>
      </Field>

      <Field>
        <Label>전화번호</Label>
        <InputWrapper>
          <Input
            type="tel"
            placeholder="전화번호를 입력하세요"
            {...register("receiverPhone")}
          />
          {errors.receiverPhone && (
            <ErrorText>{errors.receiverPhone.message}</ErrorText>
          )}
        </InputWrapper>
      </Field>

      <Field>
        <Label>수량</Label>
        <InputWrapper>
          <Input
            type="number"
            placeholder="수량을 입력하세요"
            min={1}
            {...register("quantity", { valueAsNumber: true })}
          />
          {errors.quantity && (
            <ErrorText>{errors.quantity.message}</ErrorText>
          )}
        </InputWrapper>
      </Field>
    </Container>
  );
};

export default ReceiverSection;

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
`;

const Field = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Label = styled.label`
  width: 80px;
  padding-top: 10px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray800};
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  color: black;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red500};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  margin-top: 4px;
   text-align: left;
`;
