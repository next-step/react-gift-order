import { useUserContext } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container, Title, InfoText } from './UserInfo.styles';
import MyButton from '@/components/button/button';

const UserInfo = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Login', { replace: true });
  };

  return (
    <Container>
      <Title>마이페이지</Title>
      <InfoText>
        {user?.nickname} 님 안녕하세요! <br /> 이메일 주소는 {user?.email}
        입니다.
      </InfoText>
      <MyButton onClick={handleLogout}>로그아웃</MyButton>
    </Container>
  );
};

export default UserInfo;
