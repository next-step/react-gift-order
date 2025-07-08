import Input from "@/components/common/Input/Input";
import styled from "@emotion/styled";
import SENDER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/senderSection";

interface SenderSectionProps {
  senderName: string;
  handleSenderNameChange: (value: string) => void;
  validateSenderName: (value: string) => void;
  senderNameErrorMessage: string;
  hasSenderNameError: boolean;
}

const SendSection = styled.section`
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
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.sub};
  margin-left: ${({ theme }) => theme.spacing[2]};
`;

function SenderSectionComponent({
  senderName,
  handleSenderNameChange,
  validateSenderName,
  senderNameErrorMessage,
  hasSenderNameError,
}: SenderSectionProps) {
  return (
    <SendSection>
      <SectionTitle>{SENDER_SECTION_CONSTANTS.TITLE}</SectionTitle>
      <SendForm>
        <Input
          hasError={hasSenderNameError}
          errorMessage={senderNameErrorMessage}
          type="text"
          placeholder={SENDER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
          value={senderName}
          onChange={(e) => {
            handleSenderNameChange(e.target.value);
            validateSenderName(e.target.value);
          }}
        />
        {!hasSenderNameError && (
          <InputLabel>{SENDER_SECTION_CONSTANTS.INFO_LABEL}</InputLabel>
        )}
      </SendForm>
    </SendSection>
  );
}

export default SenderSectionComponent;
