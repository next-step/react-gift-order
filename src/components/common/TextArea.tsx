import styled from '@emotion/styled';
import type { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | null;
}

export function TextArea({ error, ...props }: TextAreaProps) {
  return (
    <Container>
      <StyledTextArea error={!!error} {...props} />
      {error && <HelpText error={!!error}>{error}</HelpText>}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextArea = styled.textarea<{
  error?: boolean;
}>`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.red.red600 : theme.colors.gray.gray400)};
  border-radius: 5px;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${({ theme, error }) => (error ? theme.colors.red.red600 : theme.colors.gray.gray800)};
  }
`;

const HelpText = styled.p<{
  error?: boolean;
}>`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme, error }) => (error ? theme.colors.red.red600 : theme.colors.gray.gray600)};
`;
