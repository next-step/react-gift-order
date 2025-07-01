import { css } from '@emotion/react';
import theme from '@/styles/tokens';
import arrowBackIcon from '@src/assets/icons/arrow_back.svg';
import personIcon from '@src/assets/icons/person.svg';
import logoIcon from '@src/assets/icons/logo.webp';
import { Link, useNavigate } from 'react-router-dom';

const wrapperStyle = css`
  background-color: ${theme.colors.gray00};
  position: relative;
`;

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.75rem;
  position: relative;
`;

const navSide = css`
  width: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoWrapper = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
  align-items: center;
`;

const buttonStyle = css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const logoStyle = css`
  height: 2.75rem;
`;

const Title = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goLogin = () => {
    navigate('login');
  };

  return (
    <div css={wrapperStyle}>
      <nav css={navStyle}>
        <div css={navSide}>
          <button css={buttonStyle} onClick={goBack}>
            <img src={arrowBackIcon} alt="뒤로 가기" />
          </button>
        </div>
        <div css={logoWrapper}>
          <Link to="/">
            <img src={logoIcon} css={logoStyle} alt="카카오 선물하기 로고" />
          </Link>
        </div>
        <div css={navSide}>
          <button css={buttonStyle} onClick={goLogin}>
            <img style={{ height: '2rem' }} src={personIcon} alt="마이페이지" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Title;
