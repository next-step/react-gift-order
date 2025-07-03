/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { useUserManagement } from './Login/userManagement';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const theme = useTheme();
  const { user, logout } = useUserManagement();
  const navigate = useNavigate();

  const name = user?.email.split('@')[0] ?? '사용자'; 

  const performLogout = () => {
    logout();             
    navigate('/');        
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: calc(100vh - 60px);
        padding: ${theme.spacing[12]};
        gap: ${theme.spacing[6]};
      `}
    >
      <h1
        css={css`
          font-size: ${theme.typography.body1Bold.fontSize};
          color: ${theme.color.gray.gray900};
        `}
      >
        {name ?? '사용자'}님 안녕하세요!
      </h1>
      <p
        css={css`
          font-size: ${theme.typography.body1Bold.fontSize};
          color: ${theme.color.gray.gray900};
        `}
      >
        이메일 주소는 {user?.email ?? '없음'}입니다.
      </p>
      <button
        onClick={performLogout}
        css={css`
          padding: ${theme.spacing[3]} ${theme.spacing[6]};
          background-color: ${theme.color.yellow.yellow600};
          border: none;
          border-radius: ${theme.spacing[2]};
          color: ${theme.color.gray.gray900};
          font-weight: 600;
          font-size: ${theme.typography.body1Bold.fontSize};
          cursor: pointer;

          &:hover {
            background-color: ${theme.color.semantic.kakaoYellow};
          }
        `}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyPage;
