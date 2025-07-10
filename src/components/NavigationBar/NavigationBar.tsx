/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useNavigate, Link } from "react-router-dom";
import MyPageIcon from "@/components/common/MyPageIcon";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    const isInternalReferrer = document.referrer.includes(window.location.host);
    if (!isInternalReferrer) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <NavBar>
      <BackButton onClick={handleBack}>←</BackButton>
      <NavTitle to="/">선물하기</NavTitle>
      <LoginButton onClick={() => navigate("/my")}>
        <MyPageIcon />
      </LoginButton>
    </NavBar>
  );
}

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const BackButton = styled.div`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray1000};
`;

const NavTitle = styled(Link)`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray1000};
  text-decoration: none;
`;

const LoginButton = styled.button`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Regular.fontWeight};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray1000};
  cursor: pointer;
`;
