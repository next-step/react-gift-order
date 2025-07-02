import { ROUTE_PATH } from "@/constants";
import { getUserInfo } from "@/utils";
import styled from "@emotion/styled";
import { ChevronLeft, UserRound } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = styled.nav(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "44px",
  backgroundColor: `${theme.color.gray[0]}`,
  padding: `0 ${theme.spacing2}`,
  boxShadow: `0 1px ${theme.color.gray[200]}`,
  position: "sticky",
  top: "0",
  zIndex: "1000",
}));

const NavbarIcon = styled.div({
  width: "28px",
  height: "28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const NavbarTitle = styled.h1(({ theme }) => ({
  fontSize: `${theme.typography.title1Bold.fontSize}`,
  fontWeight: `${theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${theme.typography.title1Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  margin: 0,
}));

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    const userEmail = getUserInfo();
    if (userEmail) {
      navigate(ROUTE_PATH.MY);
    } else {
      navigate(
        `${ROUTE_PATH.LOGIN}?redirect=${encodeURIComponent(location.pathname)}`,
      );
    }
  };

  const handleTitleClick = () => {
    navigate(ROUTE_PATH.HOME);
  };

  const handleBackClick = () => {
    navigate(ROUTE_PATH.GO_BACK);
  };
  return (
    <Navbar>
      <NavbarIcon onClick={handleBackClick}>
        <ChevronLeft />
      </NavbarIcon>
      <NavbarTitle onClick={handleTitleClick}>선물하기</NavbarTitle>
      <NavbarIcon onClick={handleLoginClick}>
        <UserRound />
      </NavbarIcon>
    </Navbar>
  );
};
