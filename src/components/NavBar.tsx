/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';

const NavBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <nav css={navStyle}>
      <button onClick={handleBack} css={iconButtonStyle}>
        <FiArrowLeft size={24} color="#000" />
      </button>
      <button onClick={handleTitleClick} css={titleButtonStyle}>
        선물하기
      </button>
      <button onClick={handleLoginClick} css={iconButtonStyle}>
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