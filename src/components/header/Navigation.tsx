/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const Left = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textDefault};
`;

const Center = styled.div`
  cursor: pointer;
  flex: 1;
  text-align: center;
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.textDefault};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.textDefault};
  cursor: pointer;
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleGiftMainClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/my");
    } else {
      navigate("/login?redirect=/");
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Left onClick={handleBackClick} aria-label="뒤로가기">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Left>

      <Center onClick={handleGiftMainClick}>선물하기</Center>

      <Right onClick={handleProfileClick} aria-label="프로필">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M20 21a8 8 0 0 0-16 0"></path>
        </svg>
      </Right>
    </HeaderContainer>
  );
};
