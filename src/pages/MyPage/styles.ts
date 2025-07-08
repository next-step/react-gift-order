import styled from '@emotion/styled';

export const Main = styled.main`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing5};
`;

export const Title = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  ${({ theme }) => theme.typography.body1Bold};
`;

export const UserInfo = styled.p`
  ${({ theme }) => theme.typography.subtitle1Regular};
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellowHover};
  }
`;