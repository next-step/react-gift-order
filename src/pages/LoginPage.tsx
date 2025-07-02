import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Section } from '@/components/layout';
import { Button, ErrorMessage } from '@/components/common';
import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
  isValidEmail,
  isValidPassword,
} from '@/utils';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailBlur = () => {
    const errorMessage = getEmailErrorMessage(email);
    setEmailError(errorMessage);
  };

  const handlePasswordBlur = () => {
    const errorMessage = getPasswordErrorMessage(password);
    setPasswordError(errorMessage);
  };

  const isFormValid =
    isValidEmail(email) &&
    isValidPassword(password) &&
    !emailError &&
    !passwordError;

  const handleLogin = () => {
    // TODO: 현재는 항상 로그인 성공 처리 -> 실제 API 연동은 추후 구현
    console.log('로그인 성공:', { email, password });

    // 이전 페이지 정보가 있으면 그곳으로, 없으면 홈(/)으로 이동
    const from = location.state?.from || '/';
    navigate(from, { replace: true }); // replace로 로그인 페이지를 히스토리에서 제거
  };

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
