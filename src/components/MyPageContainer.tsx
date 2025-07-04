import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { URLS } from '@/assets/urls';

const MyPage = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem('email');
  const username = sessionStorage.getItem('username');

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('username');

    navigate(URLS.login, { replace: true });
    //로그아웃한 이후 뒤로가기를 누르면 로그인 된 상태로 돌아가는 문제를 해결
  };
  return (
    <div>
      <NavigationBar />
      <p>마이페이지</p>
      <p>{username}님 안녕하세요!</p>
      <p>이메일 주소는 {email}입니다.</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default MyPage;
