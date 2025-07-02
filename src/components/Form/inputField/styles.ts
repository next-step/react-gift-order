import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  ${({ theme }) => theme.typography.body1Regular};
  padding-left: 0;
  border: none;
  border-bottom: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.red[700] : theme.colors.gray[400]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red[700]};
  font-size: 12px;
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
