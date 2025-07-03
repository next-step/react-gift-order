import styled from '@emotion/styled';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/routes';
import useLoginForm from '../hooks/useLoginForm';
import Input from '@/components/common/Input';

const PageBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 400px;
  padding: 48px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 48px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  background: #ffe812;
  color: #222;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffeb3b;
  }
`;

const ErrorMsg = styled.div`
  color: #f44336;
  font-size: 13px;
  margin-top: 4px;
  margin-bottom: -16px;
`;

function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const from = searchParams.get('from') || ROUTE_PATH.HOME;

  // 커스텀 훅에서 모든 상태와 핸들러를 받아옴
  const {
    email,
    password,
    emailError,
    pwError,
    isButtonActive,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleSubmit,
  } = useLoginForm({ onSuccess: () => navigate(from, { replace: true }) });

  return (
    <PageBackground>
      <Card>
        <Title>kakao</Title>
        <Form onSubmit={handleSubmit}>
          {/* 이메일 입력 */}
          <div>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={!!emailError} // error가 있으면 true, 없으면 false
            />
            {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
          </div>
          {/* 비밀번호 입력 */}
          <div>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              error={!!pwError}
            />
            {pwError && <ErrorMsg>{pwError}</ErrorMsg>}
          </div>
          {/* 로그인 버튼: 조건 충족 시에만 활성화 */}
          <Button
            type="submit"
            disabled={!isButtonActive}
            style={{
              background: isButtonActive ? '#ffe812' : '#f5f6fa',
              color: isButtonActive ? '#222' : '#bbb',
              cursor: isButtonActive ? 'pointer' : 'not-allowed',
            }}
          >
            로그인
          </Button>
        </Form>
      </Card>
    </PageBackground>
  );
}

export default LoginPage;
