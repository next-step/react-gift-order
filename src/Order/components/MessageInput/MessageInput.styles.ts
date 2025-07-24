import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  background: ${theme.colors.semanticColor.backgroundColor.default};
  padding: ${theme.spacing[3]};
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: ${theme.spacing[15]};
  margin-top: ${theme.spacing[8]};
  border: 1px solid ${theme.colors.colorScale.gray[800]};
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
