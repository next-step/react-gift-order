import styled from '@emotion/styled';

interface ReceiverFormProps {
  receiverName: string;
  receiverPhone: string;
  quantity: number;
  onChangeName: (value: string) => void;
  onChangePhone: (value: string) => void;
  onChangeQuantity: (value: number) => void;
  errorName?: string;
  errorPhone?: string;
}

const ReceiverForm = ({
  receiverName,
  receiverPhone,
  quantity,
  onChangeName,
  onChangePhone,
  onChangeQuantity,
  errorName,
  errorPhone,
}: ReceiverFormProps) => {
  return (
    <Wrapper>
      <Label>받는 사람</Label>

      <InputGroup>
        <FieldLabel>이름</FieldLabel>
        <Input
          placeholder="이름을 입력하세요."
          value={receiverName}
          onChange={e => onChangeName(e.target.value)}
        />
        {errorName && <ValidationMessage>{errorName}</ValidationMessage>}
      </InputGroup>

      <InputGroup>
        <FieldLabel>전화번호</FieldLabel>
        <Input
          placeholder="전화번호를 입력하세요."
          value={receiverPhone}
          onChange={e => onChangePhone(e.target.value)}
        />
        {errorPhone && <ValidationMessage>{errorPhone}</ValidationMessage>}
      </InputGroup>

      <InputGroup>
        <FieldLabel>수량</FieldLabel>
        <Input
          type="number"
          min={1}
          value={quantity}
          onChange={e => onChangeQuantity(Number(e.target.value))}
        />
      </InputGroup>
    </Wrapper>
  );
};

export default ReceiverForm;

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Label = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const FieldLabel = styled.label`
  ${({ theme }) => theme.typography.label.label1Regular};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  ${({ theme }) => theme.typography.body.body2Regular};
`;

const ValidationMessage = styled.p`
  color: ${({ theme }) => theme.color.red[600]};
  ${({ theme }) => theme.typography.label.label2Regular};
`;
