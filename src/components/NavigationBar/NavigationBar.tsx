/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const isInternalReferrer = document.referrer.includes(window.location.host);
    if (!isInternalReferrer) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };
  const handleLogin = () => navigate('/login', { state: { from: location } });

  return (
    <NavBar>
      <BackButton onClick={handleBack}>←</BackButton>
      <NavTitle>선물하기</NavTitle>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
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
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray800};
`;

const NavTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray800};
`;

const LoginButton = styled.button`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray800};
  cursor: pointer;
`;
