import { useRouter } from "@/hooks/common/useRouter";
import { getUserInfo } from "@/utils";
import styled from "@emotion/styled";
import { ChevronLeft, UserRound } from "lucide-react";

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
  const { goMyPage, goLoginPage, goHomePage, goBack } = useRouter();

  const handleLoginClick = () => {
    const userInfo = getUserInfo();
    if (userInfo) {
      goMyPage();
    } else {
      goLoginPage({ redirect: true });
    }
  };

  return (
    <Navbar>
      <NavbarIcon onClick={goBack}>
        <ChevronLeft />
      </NavbarIcon>
      <NavbarTitle onClick={goHomePage}>선물하기</NavbarTitle>
      <NavbarIcon onClick={handleLoginClick}>
        <UserRound />
      </NavbarIcon>
    </Navbar>
  );
};
