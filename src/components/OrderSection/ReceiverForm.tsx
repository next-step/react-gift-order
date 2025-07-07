import styled from '@emotion/styled';
import InputField from '@/components/common/InputField';

interface ReceiverFormProps {
  name: string;
  phone: string;
  quantity: number;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameError?: string;
  phoneError?: string;
  quantityError?: string;
}

const ReceiverForm = ({
  name,
  phone,
  quantity,
  onNameChange,
  onPhoneChange,
  onQuantityChange,
  nameError,
  phoneError,
  quantityError,
}: ReceiverFormProps) => {
  return (
    <Wrapper>
      <Label>받는 사람</Label>
      <InputField
        type="text"
        value={name}
        onChange={onNameChange}
        error={nameError}
        placeholder="이름을 입력하세요."
      />
      <InputField
        type="tel"
        value={phone}
        onChange={onPhoneChange}
        error={phoneError}
        placeholder="전화번호를 입력하세요."
      />
      <InputField
        type="number"
        value={quantity.toString()}
        onChange={onQuantityChange}
        error={quantityError}
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
