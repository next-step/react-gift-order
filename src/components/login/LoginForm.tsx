/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type Props = {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  disabled: boolean;
};

export const LoginForm = ({
  email,
  password,
  emailError,
  passwordError,
  onChange,
  onBlur,
  onSubmit,
  disabled,
}: Props) => {
  return (
    <FormSection>
      <InputWrapper>
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!emailError}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!passwordError}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      </InputWrapper>

      <LoginButton onClick={onSubmit} disabled={disabled}>
        로그인
      </LoginButton>
    </FormSection>
  );
};

const FormSection = styled.section`
  width: 100%;
  max-width: 28rem;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

type InputProps = {
  isError?: boolean;
};

const Input = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.textDefault};
  transition: border-color 200ms;
  border: none;
  border-bottom: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.red700 : theme.colors.borderDefault};
  min-height: 3rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

const ErrorMessage = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.red700};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 50px;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
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
