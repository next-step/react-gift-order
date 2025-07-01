import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { MobileLayout, Main } from '@/components/layout';
import { NavigationBar } from '@/components/navigation';
import { HomePage, LoginPage, NotFoundPage } from '@/pages';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationConfig = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: '선물하기',
          showBackButton: true,
          showProfileButton: true,
        };
      case '/login':
        return {
          title: '로그인',
          showBackButton: true,
          showProfileButton: false,
        };
      default:
        return {
          title: 'Page Not Found',
          showBackButton: true,
          showProfileButton: false,
        };
    }
  };

  const navConfig = getNavigationConfig();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      // 브라우저 히스토리가 있으면
      navigate(-1); // 브라우저 뒤로가기
    } else {
      navigate('/'); // 홈(/)으로
    }
  };

  const handleProfileClick = () => {
    navigate('/login', {
      state: { from: location.pathname },
    });
  };

  return (
    <MobileLayout>
      <NavigationBar
        title={navConfig.title}
        showBackButton={navConfig.showBackButton}
        showProfileButton={navConfig.showProfileButton}
        onBackClick={handleBackClick}
        onProfileClick={handleProfileClick}
      />

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </MobileLayout>
  );
}

export default App;
