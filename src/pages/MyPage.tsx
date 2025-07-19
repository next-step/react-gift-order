import useAuthStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>My Page</h1>
      {user && (
        <div>
          <p>Nickname: {user.nickname}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyPage;
