import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import { useUserInfo } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@/constants/routes';

const buttonStyle = css`
  height: 2.75rem;
  font-size: ${theme.typography.subtitle2Regular.fontSize};
  font-weight: ${theme.typography.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle2Regular.lineHeight};
  color: ${theme.colors.textDefault};
  background-color: ${theme.colors.borderDisabled};
  text-align: left;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  padding: 0px 12px;
`;
const Logout = () => {
  const { setUser } = useUserInfo();
  const navigate = useNavigate();
  const logoutClicked = () => {
    setUser(undefined);
    navigate(ROUTES.LOGIN);
  };
  return (
    <button css={buttonStyle} onClick={logoutClicked}>
      로그아웃
    </button>
  );
};

export default Logout;
