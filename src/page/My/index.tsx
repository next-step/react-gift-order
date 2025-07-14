import { useUserInfo } from '@/contexts/UserInfoContext';
import { ROUTES } from '@/routes/routes';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
`;

const MyPage = () => {
  const { userInfo, logout } = useUserInfo();
  const navigate = useNavigate();

  const onClick = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <Container>
      <h1>마이페이지</h1>
      <p>안녕하세요!</p>
      <p>이메일 주소는 {userInfo.email} 입니다.</p>
      <button onClick={onClick}>로그아웃</button>
    </Container>
  );
};

export default MyPage;
