import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import { Button, ErrorMessage } from '@/components/common';
import { useLoginForm } from '@/hooks';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.spacing8}
    ${(props) => props.theme.spacing.spacing4};
  min-height: 60vh;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: ${(props) => props.theme.typography.title1Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.title1Bold.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  margin-bottom: ${(props) => props.theme.spacing.spacing8};
  text-align: center;
`;

const InputGroup = styled.div`
  width: 100%;
  max-width: 280px;
  margin-bottom: ${(props) => props.theme.spacing.spacing4};
`;

const InputLabel = styled.label`
  display: block;
  font-size: ${(props) => props.theme.typography.body2Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Bold.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  margin-bottom: ${(props) => props.theme.spacing.spacing2};
`;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: ${(props) => props.theme.spacing.spacing3}
    ${(props) => props.theme.spacing.spacing4};
  border: 1px solid
    ${(props) =>
      props.error
        ? props.theme.semanticColors.state.critical
        : props.theme.semanticColors.border.default};
  border-radius: 6px;
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-family: 'Pretendard', sans-serif;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error
        ? props.theme.semanticColors.state.critical
        : props.theme.semanticColors.kakaoYellow};
  }

  &::placeholder {
    color: ${(props) => props.theme.semanticColors.text.placeholder};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 280px;
  margin-top: ${(props) => props.theme.spacing.spacing6};
`;

const LoginPage = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleLogin,
  } = useLoginForm();

  return (
    <Section>
      <LoginContainer>
        <Logo>kakao</Logo>

        <InputGroup>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={handleEmailBlur}
            error={!!emailError}
          />
          <ErrorMessage message={emailError} />
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            onBlur={handlePasswordBlur}
            error={!!passwordError}
          />
          <ErrorMessage message={passwordError} />
        </InputGroup>

        <ButtonContainer>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleLogin}
            disabled={!isFormValid}
          >
            로그인
          </Button>
        </ButtonContainer>
      </LoginContainer>
    </Section>
  );
};

export default LoginPage;
