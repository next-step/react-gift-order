/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

type Props = {
  email: string;
  password: string;
  emailError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  disabled: boolean;
};

export const LoginForm = ({
  email,
  password,
  emailError,
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

      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChange}
      />

      <LoginButton onClick={onSubmit} disabled={disabled}>
        로그인
      </LoginButton>
    </FormSection>
  );
};

const FormSection = styled.section`
  width: 100%;
  max-width: 26.25rem;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const InputWrapper = styled.div`
  width: 100%;
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
  min-height: 2.75rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

const ErrorMessage = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.red700};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
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
