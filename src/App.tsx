import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout';
import { NavigationBar } from '@/components/navigation';
import { HomePage, LoginPage, NotFoundPage } from '@/pages';

// 라우트 경로 상수 선언
const ROUTE_HOME = '/';
const ROUTE_LOGIN = '/login';
const ROUTE_NOT_FOUND = '*';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationConfig = () => {
    switch (location.pathname) {
      case ROUTE_HOME:
        return {
          title: '선물하기',
          showBackButton: true,
          showProfileButton: true,
        };
      case ROUTE_LOGIN:
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
    navigate(ROUTE_HOME); // 항상 홈으로 이동
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

      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </MobileLayout>
  );
}

export default App;
