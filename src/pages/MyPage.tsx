import { useAuth } from '@/contexts/AuthContext';
import styled from '@emotion/styled';
import Header from '@/components/Header';

const Container = styled.div`
  max-width: 720px;
  margin: 60px auto 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 48px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Info = styled.div`
  font-size: 17px;
  margin-bottom: 32px;
  line-height: 1.7;
`;

const Button = styled.button`
  padding: 12px 24px;
  background: #f5f6fa;
  color: #222;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #eee;
  }
`;

function MyPage() {
  const { user, logout } = useAuth();

  if (!user) {
    window.location.href = '/login';
    return null;
  }

  return (
    <>
      <Header />
      <Container>
        <Title>마이 페이지</Title>
        <Info>
          {user.name}님 안녕하세요!
          <br />
          이메일 주소는 {user.email}입니다.
        </Info>
        <Button onClick={logout}>로그아웃</Button>
      </Container>
    </>
  );
}

export default MyPage;
