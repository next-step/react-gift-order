import styled from "@emotion/styled";
import ErrorMessage from "../common/ErrorMessage";

type CardTextareaProps = {
  error?: string;
};

const CardTextarea = ({ error, ...rest }: CardTextareaProps) => {
  return (
    <TextareaDiv>
      <Textarea {...rest} error={!!error} />
      {error && <ErrorMessage message={error} />}
    </TextareaDiv>
  );
};

export default CardTextarea;

const TextareaDiv = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Textarea = styled.textarea<{ error: boolean }>`
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  border-radius: 8px;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2} ${theme.spacing.spacing3}`};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.red.red500 : theme.colors.gray.gray400};
  margin: ${({ theme }) => `${theme.spacing.spacing2} 0`};

  &:focus {
    outline: none;
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.red.red500 : theme.colors.gray.gray900};
  }
`;
