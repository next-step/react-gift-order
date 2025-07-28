/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IoChevronBack } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: relative;
`;

const titleStyle = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
`;

const iconStyle = css`
  font-size: 24px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export default function TopNavBar() {
  const navigate = useNavigate();

  return (
    <header css={headerStyle}>
      <IoChevronBack
        css={iconStyle}
        onClick={() => navigate(-1)}
        aria-label="뒤로가기"
      />
      <div css={titleStyle}>선물하기</div>
      <FiUser
        css={iconStyle}
        aria-label="유저 아이콘"
        onClick={() => navigate('/login')}
      />
    </header>
  );
}
