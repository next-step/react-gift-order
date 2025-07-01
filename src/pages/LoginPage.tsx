import styled from '@emotion/styled';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/routes';

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

const Input = styled.input`
  width: 100%;
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  background: transparent;
  color: #222;
  outline: none;
  &::placeholder {
    color: #bbb;
  }
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

function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL에서 이전 페이지 정보를 가져옴 (기본값: '/')
  const from = searchParams.get('from') || ROUTE_PATH.HOME;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 성공 후 이전 페이지로 리다이렉트
    navigate(from, { replace: true });
  };

  return (
    <PageBackground>
      <Card>
        <Title>kakao</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
        </Form>
      </Card>
    </PageBackground>
  );
}

export default LoginPage;
