/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useLoginForm } from '@/hooks/useLoginForm';
import { theme } from '@/constants/theme';

type Props = {
  onLoginSuccess: () => void;
};

const LoginFormSection = ({ onLoginSuccess }: Props) => {
  const {
    id,
    pw,
    setId,
    setPw,
    idTouched,
    pwTouched,
    setIdTouched,
    setPwTouched,
    idError,
    pwError,
    isFormValid,
  } = useLoginForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onLoginSuccess();
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="id">ID (이메일)</Label>
        <Input
          id="id"
          type="email"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onBlur={() => setIdTouched(true)}
          aria-describedby="id-error"
        />
        {idError && <ErrorText id="id-error">{idError}</ErrorText>}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="pw">비밀번호</Label>
        <Input
          id="pw"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onBlur={() => setPwTouched(true)}
          aria-describedby="pw-error"
        />
        {pwError && <ErrorText id="pw-error">{pwError}</ErrorText>}
      </InputGroup>

      <LoginButton type="submit" disabled={!isFormValid}>
        로그인
      </LoginButton>
    </FormWrapper>
  );
};

export default LoginFormSection;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: ${theme.spacing.spacing6};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.spacing2};
  font: ${theme.typography.body2Bold};
  color: ${theme.textColors.default};
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 ${theme.spacing.spacing3};
  border: 1px solid ${theme.borderColors.default};
  border-radius: 8px;
  font: ${theme.typography.body2Regular};
  background-color: ${theme.backgroundColors.fill};
  color: ${theme.textColors.default};

  &::placeholder {
    color: ${theme.textColors.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue600};
    background-color: ${theme.backgroundColors.default};
  }
`;

const ErrorText = styled.p`
  margin-top: ${theme.spacing.spacing1};
  font: ${theme.typography.label2Regular};
  color: ${theme.stateColors.critical};
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  height: 48px;
  border: none;
  border-radius: 8px;
  font: ${theme.typography.body2Bold};
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.gray300 : theme.sementicColors.kakaoYellow};
  color: #000;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? theme.colors.gray300 : theme.sementicColors.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ disabled }) =>
      disabled ? theme.colors.gray300 : theme.sementicColors.kakaoYellowActive};
  }
`;
