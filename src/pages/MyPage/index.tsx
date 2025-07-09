import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const MyPage = () => {
  const { userInfo, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <S.Main>
      <S.Spacer />
      <S.Title>마이 페이지</S.Title>
      <S.UserInfo>{userInfo ? `${userInfo.email.split('@')[0]}님 안녕하세요!` : ''}</S.UserInfo>
      <S.UserInfo>이메일 주소는 {userInfo?.email}입니다.</S.UserInfo>
      <S.Spacer />
      <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
      <S.Spacer />
    </S.Main>
  );
};

export default MyPage; 