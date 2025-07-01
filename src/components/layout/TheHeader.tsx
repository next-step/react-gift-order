import styled from "@emotion/styled";
import Back from "@/components/UI/Back";
import Logo from "@/components/UI/Logo";
import User from "@/components/UI/User";
import { useNavigate } from "react-router";

const TheHeader = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickLogo = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  const handleClickUser = () => {
    if (location.pathname !== "/login") {
      navigate("/login");
    }
  };

  return (
    <Header>
      <Back size={"28px"} onClick={handleClickBack} />
      <Logo size={"150px"} onClick={handleClickLogo} />
      <User size={"24px"} onClick={handleClickUser} />
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
