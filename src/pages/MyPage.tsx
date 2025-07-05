import styled from '@emotion/styled';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/styles/theme';

export default function MyPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const emailId = user?.email ? user.email.split('@')[0] : '';

  return (
    <div style={{ padding: 32 }}>
      <h3>마이 페이지</h3>
      <p>{emailId}님 안녕하세요!</p>
      <p>이메일 주소는 {user?.email}입니다.</p>
      <GrayButton onClick={handleLogout}>로그아웃</GrayButton>
    </div>
  );
}

const GrayButton = styled.button`
  background: ${theme.colors.gray300};
  color: ${theme.colors.gray1000};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.gray400};
  }
  &:active {
    background: ${theme.colors.gray500};
  }
`;
