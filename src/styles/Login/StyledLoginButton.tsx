import styled from '@emotion/styled';

export const StyledLoginButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.spacing12};
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
  border: 1px solid ${({ theme }) => theme.sementicPalette.kakaoYellow};
  border-radius: 4px;
  width: 100%;
  height: 40px;
  a {
    text-decoration: none;
  }
`;
