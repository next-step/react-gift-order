import styled from '@emotion/styled';
import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/hooks/useAuth';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: #fff;
`;

const Content = styled.div`
  padding: 32px 16px;
`;

const MyTitle = styled.div`
  ${({ theme }) => theme.typography.subtitle1Bold}
  margin-bottom: 8px;
`;

const MyInfo = styled.p`
  ${({ theme }) => theme.typography.body1Regular}
`;

const LogoutBtn = styled.button`
  margin-top: 24px;
  padding: 0 12px;
  height: 44px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => theme.typography.label1Regular};
`;

export default function MyPage() {
  const { user, logout } = useAuth();
  const nickname = user?.email.split('@')[0];

  return (
    <MobileLayout>
      <Wrapper>
        <NavBar />
        <Content>
          <MyTitle>마이 페이지</MyTitle>
          <MyInfo>
            <p>{nickname}님 안녕하세요!</p>
            <p>이메일 주소는 {user?.email}입니다.</p>
          </MyInfo>
          <LogoutBtn onClick={() => logout()}>로그아웃</LogoutBtn>
        </Content>
      </Wrapper>
    </MobileLayout>
  );
}
