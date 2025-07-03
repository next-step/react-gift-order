import styled from "@emotion/styled";
import LeftArrow from "@/components/icons/LeftArrow";
import Profile from "@/components/icons/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import { ROUTE_PATH } from "@/components/routes/Routes";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(ROUTE_PATH.HOME);
    }
  };
  const goHome = () => {
    navigate(ROUTE_PATH.HOME);
  };
  const goLogin = () => {
    const isValidPath = (Object.values(ROUTE_PATH) as string[]).includes(location.pathname);
    const loginPath = isValidPath ? ROUTE_PATH.LOGIN + `?redirect=${location.pathname}` : ROUTE_PATH.LOGIN;
    navigate(loginPath);
  };
  const isLoginPageOrProfilePage = location.pathname === ROUTE_PATH.LOGIN || location.pathname === ROUTE_PATH.PROFILE;
  return (
    <Container>
      <Nav>
        <NavLeft>
          <Button variant="icon" onClick={goBack}>
            <LeftArrow />
          </Button>
        </NavLeft>
        <NavCenter>
          <Button variant="icon" onClick={goHome}>
            선물하기
          </Button>
        </NavCenter>
        <NavRight>
          <Button variant="icon" onClick={goLogin} disabled={isLoginPageOrProfilePage}>
            <Profile />
          </Button>
        </NavRight>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  z-index: 999;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  max-width: 720px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  padding: 0 ${({ theme }) => theme.spacing.spacing1};
`;
const NavLeft = styled.div`
  margin-right: auto;
`;
const NavCenter = styled.div`
  margin: 0 auto;
  font: ${({ theme }) => theme.typography.title1Bold};
`;
const NavRight = styled.div`
  margin-left: auto;
`;

export default Navigation;
