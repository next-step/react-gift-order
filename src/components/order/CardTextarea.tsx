import styled from "@emotion/styled";

type CardTextareaProps = {
  message: string;
  onChange: (value: string) => void;
};

const CardTextarea = ({ message, onChange }: CardTextareaProps) => {
  return (
    <TextareaDiv>
      <Textarea
        placeholder="카드 메시지를 입력해주세요."
        value={message}
        onChange={e => onChange(e.target.value)}
      />
    </TextareaDiv>
  );
};

export default CardTextarea;

const TextareaDiv = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  border-radius: 8px;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2} ${theme.spacing.spacing3}`};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  margin: ${({ theme }) =>
    `${theme.spacing.spacing2} 0 ${theme.spacing.spacing4}`};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray900};
  }
`;
