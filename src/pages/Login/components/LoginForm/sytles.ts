import styled from '@emotion/styled';

export const LoginSection = styled.section`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border: none;
  border-radius: 6px;
  ${({ theme }) => theme.typography.subtitle2Regular}
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  
  &:hover {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowHover};
  }
  
  &:active {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowActive};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.yellow[300]};
    color: ${({ theme }) => theme.colors.gray[600]};
    cursor: not-allowed;
  }
`;
