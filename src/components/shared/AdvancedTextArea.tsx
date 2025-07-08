import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";

type AdvancedTextAreaProps = {
  error: boolean;
  helperText: string | undefined;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function AdvancedTextArea({
  error,
  helperText,
  ...props
}: AdvancedTextAreaProps) {
  return (
    <AdvancedTextAreaWrapper>
      <TextArea valid={!error} {...props} />
      {error && <ErrorMessage>{helperText}</ErrorMessage>}
    </AdvancedTextAreaWrapper>
  );
}

const AdvancedTextAreaWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea<{ valid: boolean }>`
  flex: 1;
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  transition: border-bottom 0.25s ease;

  border-color: ${({ valid }) =>
    valid ? theme.colors.gray.gray500 : theme.colors.red.red600};
`;

const ErrorMessage = styled.p`
  margin: 5px;
  margin-left: 10px;
  font-size: 12px;
  color: ${theme.colors.red.red600};
`;

export default AdvancedTextArea;
