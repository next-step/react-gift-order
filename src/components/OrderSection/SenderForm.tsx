import styled from '@emotion/styled';

interface SenderFormProps {
  senderName: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const SenderForm = ({
  senderName,
  onChange,
  errorMessage,
}: SenderFormProps) => {
  return (
    <Wrapper>
      <Label>보내는 사람</Label>
      <Input
        placeholder="이름을 입력하세요."
        value={senderName}
        onChange={e => onChange(e.target.value)}
      />
      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </Wrapper>
  );
};

export default SenderForm;

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;
`;

const Label = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  ${({ theme }) => theme.typography.body.body2Regular};
`;

const ValidationMessage = styled.p`
  color: ${({ theme }) => theme.color.red[600]};
  ${({ theme }) => theme.typography.label.label2Regular};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;
