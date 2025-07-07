import { Section } from '@/components/layout';
import { Button } from '@/components/common';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <Section>
      <div style={{ maxWidth: 320, margin: '40px auto', textAlign: 'center' }}>
        <h1>마이페이지</h1>
        <p>환영합니다, {user?.email}님!</p>
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          style={{ marginTop: 32 }}
          onClick={handleLogout}
        >
          로그아웃
        </Button>
      </div>
    </Section>
  );
};

export default MyPage;
