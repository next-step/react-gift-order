import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const auth = useContext(AuthContext)!;
  const nav = useNavigate();

  const onLogout = () => {
    auth.logout();
    nav('/login');
  };

  return (
    <div className="p-4">
      <h2>마이페이지</h2>
      <p>환영합니다, {auth.user?.name}님</p>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}