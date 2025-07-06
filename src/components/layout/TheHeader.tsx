import styled from "@emotion/styled";
import Back from "@/components/UI/Back";
import Logo from "@/components/UI/Logo";
import User from "@/components/UI/User";
import { useLocation, useNavigate } from "react-router";
import { ROUTE_PATH } from "@/routes/paths";
import { useUserInfo } from "@/contexts/UserInfoContext";

const TheHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useUserInfo();

  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickLogo = () => {
    if (location.pathname !== ROUTE_PATH.HOME) {
      navigate(ROUTE_PATH.HOME);
    }
  };
  const handleClickUser = () => {
    if (
      location.pathname !== ROUTE_PATH.MY_PAGE &&
      location.pathname !== ROUTE_PATH.LOGIN
    ) {
      if (user?.email) {
        navigate(ROUTE_PATH.MY_PAGE);
      } else {
        navigate(`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`);
      }
    }
  };

  return (
    <Header>
      <button onClick={handleClickBack}>
        <Back size={"28px"} />
      </button>
      <button onClick={handleClickLogo}>
        <Logo size={"150px"} />
      </button>
      <button onClick={handleClickUser}>
        <User size={"24px"} />
      </button>
    </Header>
  );
};

export default TheHeader;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.spacing2};
  height: 44px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;
