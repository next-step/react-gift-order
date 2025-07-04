// src/pages/MyPage.tsx
import styled from '@emotion/styled';
import { Header } from '../components/common/Header';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const InfoP = styled.p`
  padding: 5px;
`;

const LogoutButton = styled.button`
  border-radius: 2px;
  border: none;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray300};
`;

function MyPage() {
  const { userEmail, logout } = useAuth();
  const navigate = useNavigate();

  const userName = userEmail ? userEmail.split('@')[0] : '';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <Header></Header>
      <br />
      <h1>마이페이지</h1>
      <br />
      <InfoP>{userName}님 안녕하세요!</InfoP>
      <InfoP>이메일 주소는 {userEmail}입니다!</InfoP>
      <br />
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </div>
  );
}

export default MyPage;
