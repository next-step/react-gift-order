import styled from "@emotion/styled";

interface SenderSectionProps {
  senderName: string;
  handleSenderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SendSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  background-color: ${({ theme }) => theme.colors.background.default};
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.text.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.form.focusBorderColor};
  }
`;

function SenderSectionComponent({
  senderName,
  handleSenderNameChange,
}: SenderSectionProps) {
  return (
    <SendSection>
      <SectionTitle>보내는 사람</SectionTitle>
      <SendForm>
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          value={senderName}
          onChange={handleSenderNameChange}
        />
      </SendForm>
    </SendSection>
  );
}

export default SenderSectionComponent;
