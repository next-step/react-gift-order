import styled from "@emotion/styled";
import { useAuth } from "@/contexts/AuthContext";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/header/Navigation";

const MyPage = () => {
  const { user, logout } = useAuth();
  const userName = user?.email.split("@")[0] ?? "사용자";

  return (
    <PageContainer>
      <Navigation />
      <Main>
        <Spacer size={32} />
        <Title>마이 페이지</Title>
        <Spacer size={8} />
        <Text>{userName}님 안녕하세요!</Text>
        <Text>이메일 주소는 {user?.email}입니다.</Text>
        <Spacer size={16} />
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        <Spacer size={16} />
      </Main>
    </PageContainer>
  );
};

export default MyPage;

const Main = styled.main`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  box-sizing: border-box;
`;

const Title = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.textDefault};
  margin: 0;
  text-align: left;
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.textDefault};
  margin: 0;
  text-align: left;
`;

const LogoutButton = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  color: ${({ theme }) => theme.colors.textDefault};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.kakaoYellowActive};
  }
`;

const Spacer = styled.div<{ size: number }>`
  height: ${({ size }) => size}px;
`;
