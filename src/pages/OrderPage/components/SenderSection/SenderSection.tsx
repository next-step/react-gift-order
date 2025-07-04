import Input from "@/components/common/Input/Input";
import styled from "@emotion/styled";

interface SenderSectionProps {
  senderName: string;
  handleSenderNameChange: (value: string) => void;
  validateSenderName: (value: string) => void;
  senderNameErrorMessage: string | null;
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
      <SectionTitle>보내는 사람</SectionTitle>
      <SendForm>
        <Input
          hasError={hasSenderNameError}
          errorMessage={senderNameErrorMessage || undefined}
          type="text"
          placeholder="이름을 입력해주세요"
          value={senderName}
          onChange={(e) => {
            handleSenderNameChange(e.target.value);
            validateSenderName(e.target.value);
          }}
        />
        {!hasSenderNameError && (
          <InputLabel>
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다
          </InputLabel>
        )}
      </SendForm>
    </SendSection>
  );
}

export default SenderSectionComponent;
