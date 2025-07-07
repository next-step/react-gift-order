import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.semantic.border.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.semantic.text.default};
  background-color: transparent;
  
  &::placeholder {
    color: ${({ theme }) => theme.semantic.text.placeholder};
  }
`; 