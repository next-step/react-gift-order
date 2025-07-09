import styled from '@emotion/styled';

interface TextAreaStyledProps {
  hasError?: boolean;
}

export const TextArea = styled.textarea<TextAreaStyledProps>`
  width: 100%;
  min-height: ${({ theme }) => theme.spacing.spacing11}; 
  min-width: 120px;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3}; 
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.red[700] : theme.semantic.border.default
  };
  border-radius: ${({ theme }) => theme.spacing.spacing2}; 
  ${({ theme }) => theme.typography.body1Regular}; 
  color: ${({ theme }) => theme.semantic.text.default};
  background-color: transparent;
`;
