import styled from "@emotion/styled";
import LeftArrow from "@/components/icons/LeftArrow";
import Profile from "@/components/icons/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/App";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(ROUTE_PATH.HOME);
    }
  };
  const handleHomeClick = () => {
    navigate(ROUTE_PATH.HOME);
  };
  const handleLoginClick = () => {
    let path: string = `${ROUTE_PATH.LOGIN}`;
    if ((Object.values(ROUTE_PATH) as string[]).includes(location.pathname)) {
      path = path + `?redirect=${location.pathname}`;
    }
    navigate(path);
  };
  return (
    <Container>
      <Nav>
        <NavLeft>
          <LinkBtn onClick={handleBackClick}>
            <LeftArrow />
          </LinkBtn>
        </NavLeft>
        <NavCenter>
          <LinkBtn onClick={handleHomeClick}>선물하기</LinkBtn>
        </NavCenter>
        <NavRight>
          <LinkBtn onClick={handleLoginClick} disabled={location.pathname === ROUTE_PATH.LOGIN}>
            <Profile />
          </LinkBtn>
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
const LinkBtn = styled.button<{ disabled?: boolean }>`
  background-color: transparent;
  border: none;
  font: ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.color.textColor.default};
  cursor: ${({ disabled = false }) => (disabled ? "default" : "pointer")};
`;

export default Navigation;
