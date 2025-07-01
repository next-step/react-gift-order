import styled from "@emotion/styled";
import { FiArrowLeft, FiUser } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { HIDE_BACK_BUTTON_PATHS } from "@/constants/navigation";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isShowBackButton = !HIDE_BACK_BUTTON_PATHS.includes(location.pathname);

  return (
    <Nav>
      <Left>
        {!isShowBackButton && (
          <IconButton onClick={() => navigate(-1)}>
            <FiArrowLeft size={24} />
          </IconButton>
        )}
      </Left>
      <Center>선물하기</Center>
      <Right>
        <IconButton
          onClick={() => navigate("/login", { state: { from: location } })}
        >
          <FiUser size={24} />
        </IconButton>
      </Right>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #dcdee3;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
`;

const Center = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
