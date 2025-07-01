import { ArrowLeft, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { palette, spacing } from '@/styles/theme';

const headerStyle = css`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${palette.gray200};
  padding: 0 ${spacing.spacing4};
`;
export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const goProfile = () => {
    if (location.pathname !== '/login') {
      navigate('/login', { state: { from: location.pathname } });
    } else {
      navigate('/');
    }
  };

  return (
    <header css={headerStyle}>
      <button
        aria-label="back"
        onClick={goBack}
        css={{ background: 'none', border: 0, cursor: 'pointer', marginRight: spacing.spacing4 }}
      >
        <ArrowLeft size={24} color={palette.gray900} />
      </button>
      <h3 css={{ flex: 1, textAlign: 'center', fontWeight: 700,}}>선물하기</h3>
      <button
        aria-label="profile"
        onClick={goProfile}
        css={{ background: 'none', border: 0, cursor: 'pointer' }}
      >
        <User size={24} color={palette.gray900} />
      </button>
    </header>
  );
};