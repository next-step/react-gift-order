import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${({ theme }) => theme.components.navigationBar.height});
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const KakaoLogo = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) =>
    theme.typography.title.title1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  margin-bottom: 3rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: 3rem;
`;

export const InputFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const InputField = styled.input<{
  isError: boolean;
}>`
  width: 100%;
  height: 2.5rem;

  border: none;
  border-bottom: 1px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.red[700] : theme.colors.border.default};
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.background.default};
  opacity: 0.5;

  font-size: 1rem;
  font-family: "Pretendard", sans-serif;
  color: ${({ theme }) => theme.colors.gray[900]};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 2.8rem;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};

  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.brand.kakaoYellowPressed};
  }
`;
