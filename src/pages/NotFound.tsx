import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import { useNavigate } from 'react-router-dom';
import notfoundImg from '@src/assets/icons/img_not_found.png';
import ROUTES from '@/constants/routes';

const mainStyle = css`
  width: 100%;
  background-color: ${theme.colors.gray200};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1.25rem;
  box-sizing: border-box;
  height: calc(100vh - 2.75rem);
`;
const imgStyle = css`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const h3Style = css`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;

const pStyle = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${theme.colors.gray700};
  margin: 0px;
  text-align: left;
`;

const buttonStyle = css`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.yellow600};
  color: ${theme.colors.textDefault};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  cursor: pointer;
  border: none;
`;

const space28 = css`
  width: 100%;
  height: 28px;
  background-color: transparent;
`;

const space8 = css`
  width: 100%;
  height: 8px;
  background-color: transparent;
`;

const space48 = css`
  width: 100%;
  height: 48px;
  background-color: transparent;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      <main css={mainStyle}>
        <img css={imgStyle} src={notfoundImg} alt="Not Found 이미지" />
        <div css={space28} />
        <h3 css={h3Style}>잘못된 접근입니다.</h3>
        <div css={space8} />
        <p css={pStyle}>찾으시는 페이지가 존재하지 않습니다.</p>
        <div css={space48} />
        <button css={buttonStyle} onClick={goHome}>
          홈으로
        </button>
      </main>
    </div>
  );
};

export default NotFound;
