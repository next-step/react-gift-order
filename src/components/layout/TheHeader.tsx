import styled from "@emotion/styled";
import Back from "@/components/UI/Back";
import Logo from "@/components/UI/Logo";
import User from "@/components/UI/User";
import { useLocation, useNavigate } from "react-router";
import { ROUTE_PATH } from "@/routes/paths";

const TheHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickLogo = () => {
    if (pathname !== ROUTE_PATH.HOME) {
      navigate(ROUTE_PATH.HOME);
    }
  };
  const handleClickUser = () => {
    if (pathname !== ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.LOGIN, { state: { from: pathname } });
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
