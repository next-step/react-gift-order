import styled from '@emotion/styled';

interface InputStyledProps {
  hasError?: boolean;
}

export const Input = styled.input<InputStyledProps>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.spacing2} ${theme.spacing.spacing2}`};
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.red[700] : theme.semantic.border.default
  };
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.semantic.text.default};
  background-color: transparent;
  
  &::placeholder {
    color: ${({ theme }) => theme.semantic.text.placeholder};
    ${({ theme }) => theme.typography.label2Regular};
  }
`; 