import styled from "@emotion/styled";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/App";

const Profile = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(ROUTE_PATH.HOME);
  };
  const logout = () => {
    clearUserId();
    goHome();
  };
  const userId = getUserId();
  const userName = userId ? userId?.split("@")[0] : undefined;
  return (
    <Container>
      <Content>
        <Title>마이 페이지</Title>
        <UserInfo>{userName} 님 안녕하세요</UserInfo>
        <UserInfo>이메일 주소는 {userId}입니다.</UserInfo>
        <Divider />
        <Button variant="secondary" size="small" onClick={logout}>
          로그아웃
        </Button>
      </Content>
    </Container>
  );
};

const getUserId = () => {
  const userId = document.cookie.match("(^|;) ?userId=([^;]*)(;|$)");
  return userId ? userId[2] : null;
};
const clearUserId = () => {
  document.cookie = `userId=`;
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
