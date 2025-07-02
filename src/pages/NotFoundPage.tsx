/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
   const theme = useTheme();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div css={container}>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <button onClick={goToHome} css={buttonStyle(theme)}>홈으로</button>
    </div>
  );
};

export default NotFoundPage;

const container = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: ${theme.color.gray.gray800};
  gap: ${theme.spacing[2]};
`;

const buttonStyle = (theme: ThemeType) => css`
  margin-top: ${theme.spacing[5]};
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  background-color: ${theme.color.yellow.yellow600};
  color: #000;
  border: none;
  border-radius:${theme.spacing[2]};
  font-weight: bold;
  font-size: ${theme.spacing[4]};
  cursor: pointer;
`;
