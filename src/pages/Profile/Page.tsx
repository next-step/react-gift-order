import styled from "@emotion/styled";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/components/routes/Routes";
import { clearCookieValue } from "@/utils/cookie";
import { AUTH_COOKIE_KEY, useAuth } from "@/contexts/authContext";

const Profile = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    clearCookieValue(AUTH_COOKIE_KEY);
    setAuth({ isLoggedIn: false });
    navigate(ROUTE_PATH.LOGIN);
  };

  return (
    <Container>
      <Content>
        <Title>마이 페이지</Title>
        <UserInfo>{auth.userName} 님 안녕하세요</UserInfo>
        <UserInfo>이메일 주소는 {auth.userEmail}입니다.</UserInfo>
        <Divider />
        <Button variant="secondary" size="small" onClick={logout}>
          로그아웃
        </Button>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing5};
  gap: ${({ theme }) => theme.spacing.spacing1};
`;
const Title = styled.h3`
  width: 100%;
  text-align: left;
  font: ${({ theme }) => theme.typography.title2Bold};
`;
const UserInfo = styled(Title)`
  font: ${({ theme }) => theme.typography.body1Regular};
`;

export default Profile;
