import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;
export const LogoImg = styled.img`
  width: 180px;
  align-self: center;
`;
export const Input = styled.input`
  width: 400px;
  height: 60px;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray600};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  }
`;

export const LoginButton = styled.button<{ isValid?: boolean }>`
  background: ${({ theme, isValid }) =>
    isValid ? theme.colors.kakaoYellow : theme.colors.backgroundDisabled};
  height: 48px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  cursor: ${({ isValid }) => (isValid ? "pointer" : "default")};
  opacity: ${({ isValid }) => (isValid ? 1 : 0.5)};
  transition:
    background 0.2s,
    opacity 0.2s;

  &:active {
    background: ${({ theme, isValid }) =>
      isValid
        ? theme.colors.kakaoYellowActive
        : theme.colors.backgroundDisabled};
    transform: scale(0.98);
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.critical};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

