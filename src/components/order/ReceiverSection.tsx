/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type Props = {
  receiverName: string;
  phone: string;
  quantity: number;
  onChange: (field: "receiverName" | "receiverPhone" | "quantity", value: string | number) => void;
  errors: {
    receiverName?: string | null;
    receiverPhone?: string | null;
    quantity?: string | null;
  };
};

const ReceiverSection = ({
  receiverName,
  phone,
  quantity,
  onChange,
  errors,
}: Props) => {
  return (
    <Container>
      <Title>받는 사람</Title>

      <Field>
        <Label>이름</Label>
        <InputWrapper>
          <Input
            type="text"
            value={receiverName}
            onChange={(e) => onChange("receiverName", e.target.value)}
            placeholder="이름을 입력하세요"
          />
          {errors.receiverName && <ErrorText>{errors.receiverName}</ErrorText>}
        </InputWrapper>
      </Field>

      <Field>
        <Label>전화번호</Label>
        <InputWrapper>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => onChange("receiverPhone", e.target.value)}
            placeholder="전화번호를 입력하세요"
          />
          {errors.receiverPhone && <ErrorText>{errors.receiverPhone}</ErrorText>}
        </InputWrapper>
      </Field>

      <Field>
        <Label>수량</Label>
        <InputWrapper>
          <Input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              onChange("quantity", e.target.value === "" ? 1 : Number(e.target.value))
            }
            placeholder="수량을 입력하세요"
          />
          {errors.quantity && <ErrorText>{errors.quantity}</ErrorText>}
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
