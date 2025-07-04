import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ error?: string }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4} 0; //shorthand 문법을 사용해서 위아래,좌우로 설정
  ${({ theme }) => theme.typography.body1Regular};
  border: none;
  border-bottom: 1px solid ${({ theme, error }) => 
    error ? theme.colors.red[700] : theme.colors.gray[400]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red[700]};
  ${({ theme }) => theme.typography.label2Regular}; //px에서 theme 재사용
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
