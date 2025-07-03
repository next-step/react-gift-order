/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';
import { useUserManagement } from '../pages/Login/userManagement';

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useUserManagement();

  const goToBack = () => {
    navigate(-1);
  };

  const goToLoginOrMyPage = () => {
    if (user) {
      navigate('/my');  
    } else {
      navigate('/login');
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <nav css={navStyle}>
      <button onClick={goToBack} css={iconButtonStyle}>
        <FiArrowLeft size={24} color="#000" />
      </button>
      <button onClick={goToHome} css={titleButtonStyle}>
        선물하기
      </button>
      <button onClick={goToLoginOrMyPage} css={iconButtonStyle}>
        <FiUser size={24} color="#000" />
      </button>
    </nav>
  );
};

export default NavBar;

const navStyle = css`
  max-width: 720px;
  height: ${theme.spacing[12]};
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.gray.gray200};
  background-color: #fff;
`;

const iconButtonStyle = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const titleButtonStyle = css`
  background: none;
  border: none;
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  color: ${theme.color.gray.gray1000};
  cursor: pointer;
`;
