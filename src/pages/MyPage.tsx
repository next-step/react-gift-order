import { Section } from '@/components/layout';
import { useAuth } from '@/hooks';

const MyPage = () => {
  const { user } = useAuth();

  return (
    <Section>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>마이페이지</h1>
        <p>환영합니다, {user?.email}님!</p>
        <p>로그아웃 기능은 다음 단계에서 구현 예정입니다.</p>
      </div>
    </Section>
  );
};

export default MyPage;
