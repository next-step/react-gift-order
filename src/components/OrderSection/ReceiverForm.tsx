import styled from '@emotion/styled';
import InputField from '@/components/common/InputField';

interface ReceiverFormProps {
  values: {
    receiverName: string;
    receiverPhone: string;
    quantity: number;
  };
  errors: {
    receiverName?: string;
    receiverPhone?: string;
    quantity?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReceiverForm = ({ values, errors, onChange }: ReceiverFormProps) => {
  return (
    <Wrapper>
      <Label>받는 사람</Label>
      <InputField
        name="receiverName"
        type="text"
        value={values.receiverName}
        onChange={onChange}
        error={errors.receiverName}
        placeholder="이름을 입력하세요."
      />
      <InputField
        name="receiverPhone"
        type="tel"
        value={values.receiverPhone}
        onChange={onChange}
        error={errors.receiverPhone}
        placeholder="전화번호를 입력하세요."
      />
      <InputField
        name="quantity"
        type="number"
        value={String(values.quantity)}
        onChange={onChange}
        error={errors.quantity}
        placeholder="수량"
      />
    </Wrapper>
  );
};

export default ReceiverForm;

const Wrapper = styled.section`
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
