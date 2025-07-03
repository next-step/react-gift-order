import Layout from "@/layout";
import styled from "@emotion/styled";

const user = {
  email: "test@test.com",
};
const logout = () => {};

const MyPageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} 0 0
    ${({ theme }) => theme.spacing[4]};
`;

const Title = styled.h2`
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Greeting = styled.div`
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Email = styled.div`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing[7]};
`;

const LogoutButton = styled.button`
  background: ${({ theme }) => theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: none;
`;

function MyPage() {
  return (
    <Layout>
      <MyPageContainer>
        <Title>마이 페이지</Title>
        <Greeting>{user.email.split("@")[0]}님 안녕하세요!</Greeting>
        <Email>이메일 주소는 {user.email}입니다.</Email>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </MyPageContainer>
    </Layout>
  );
}

export default MyPage;
