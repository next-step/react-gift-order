/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type Props = {
  onSubmit: () => void;
  disabled: boolean;
};

export const LoginForm = ({ onSubmit, disabled }: Props) => {
  return (
    <FormSection>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <LoginButton onClick={onSubmit} disabled={disabled}>
        로그인
      </LoginButton>
    </FormSection>
  );
};

const FormSection = styled.section`
  width: 100%;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.textDefault};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background-color: transparent;
  ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 50px;
  margin-top: ${({ theme }) => theme.spacing.spacing5};
  ${({ theme }) => theme.typography.subtitle2Regular};

  color: ${({ theme }) => theme.colors.textDefault};
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.kakaoYellowActive};
  }
`;
