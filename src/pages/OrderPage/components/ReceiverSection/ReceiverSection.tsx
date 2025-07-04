import Input from "@/components/common/Input/Input";
import styled from "@emotion/styled";

interface ReceiverSectionProps {
  receiverName: string;
  receiverPhone: string;
  quantity: string;
  handleReceiverNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReceiverPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReceiverSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  margin: 0;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const FieldLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  min-width: 4rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

function ReceiverSectionComponent({
  receiverName,
  receiverPhone,
  quantity,
  handleReceiverNameChange,
  handleReceiverPhoneChange,
  handleQuantityChange,
}: ReceiverSectionProps) {
  return (
    <ReceiverSection>
      <SectionTitle>받는 사람</SectionTitle>
      <FormContainer>
        <FormField>
          <FieldLabel>이름</FieldLabel>
          <Input
            type="text"
            placeholder="이름을 입력하세요."
            value={receiverName}
            onChange={handleReceiverNameChange}
          />
        </FormField>
        <FormField>
          <FieldLabel>전화번호</FieldLabel>
          <Input
            type="tel"
            placeholder="전화번호를 입력하세요."
            value={receiverPhone}
            onChange={handleReceiverPhoneChange}
          />
        </FormField>
        <FormField>
          <FieldLabel>수량</FieldLabel>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </FormField>
      </FormContainer>
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
