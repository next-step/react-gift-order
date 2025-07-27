import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  background: ${theme.colors.semanticColor.backgroundColor.default};
  padding: ${theme.spacing[3]};
`;

interface TextAreaProps {
  isError?: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  min-height: ${theme.spacing[15]};
  margin-top: ${theme.spacing[8]};
  border: 1px solid ${({ isError }) => (isError ? 'red' : '#ccc')};
  border-radius: ${theme.spacing[2]};
  padding: ${theme.spacing[3]};
  font-family: inherit;
`;

export const ErrorText = styled.p`
  text-align: left;
  color: ${theme.colors.semanticColor.stateColor.critical};
  ${theme.typography.label2Regular};
  margin-top: ${theme.spacing[1]};
  margin-bottom: ${theme.spacing[2]};
`;
