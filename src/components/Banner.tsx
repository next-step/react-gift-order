import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import plusIcon from '@src/assets/icons/plus.svg';
import { useUserInfo } from '@/contexts/AuthContext';

const bannerStyle = css`
  background-color: ${theme.colors.gray200};
  width: 100%;
  padding: 16px 12px;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const buttonStyle = css`
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background-color: ${theme.colors.gray00};
  cursor: pointer;
`;
const plusStyle = css`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 16px;
  background-color: ${theme.colors.yellow600};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const pTagStyle = css`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  width: 100%;
  text-align: left;
`;

const Banner = () => {
  const { user } = useUserInfo();

  return (
    <section css={bannerStyle}>
      <button css={buttonStyle}>
        <div css={plusStyle}>
          <img src={plusIcon} alt="추가 버튼" />
        </div>
        <p css={pTagStyle}>
          {user ? `${user.name}님! ` : ''}
          선물할 친구를 선택해 주세요.
        </p>
      </button>
    </section>
  );
};

export default Banner;
