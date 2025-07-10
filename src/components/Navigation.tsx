import styled from '@emotion/styled';
import PresentLogo from '@/assets/present.webp';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/constants/routes';

interface NavigationProps {
  showLoginButton?: boolean;
}

const Navigation = ({ showLoginButton = true }: NavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Nav>
      <div>
        <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </IconButton>
      </div>

      <div>
        <Logo
          src={PresentLogo}
          alt="카카오 선물하기 로고"
          onClick={() => navigate(ROUTES.HOME)}
        />
      </div>

      <div>
        <IconButton
          onClick={() =>
            user
              ? navigate(ROUTES.MY)
              : navigate(ROUTES.LOGIN, { state: { from: location } })
          }
          aria-label={user ? '마이페이지' : '로그인'}
          disabled={!showLoginButton}
        >
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
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </IconButton>
      </div>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const IconButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.semantic.background.default};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.semantic.text.default};
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

const Logo = styled.img`
  height: 44px;
  cursor: pointer;
`;
