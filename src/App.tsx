import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { MobileLayout } from '@/components/layout';
import { NavigationBar } from '@/components/navigation';
import { PrivateRoute } from '@/components/common';
import { HomePage, LoginPage, MyPage, OrderPage, NotFoundPage } from '@/pages';
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_MY,
  ROUTE_ORDER,
  ROUTE_NOT_FOUND,
} from '@/constants';

// OrderLayout 컴포넌트 추가
function OrderLayout() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar
        title="선물하기"
        showBackButton={true}
        showProfileButton={false}
        onBackClick={() => navigate(ROUTE_HOME)}
      />
      <Outlet />
    </>
  );
}

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
      case ROUTE_MY:
        return {
          title: '마이페이지',
          showBackButton: true,
          showProfileButton: false,
        };
      default:
        if (location.pathname.startsWith(ROUTE_ORDER)) {
          return {
            title: '선물하기',
            showBackButton: true,
            showProfileButton: false,
          };
        }
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
    navigate(ROUTE_MY);
  };

  return (
    <MobileLayout>
      {!location.pathname.startsWith(ROUTE_ORDER) && (
        <NavigationBar
          title={navConfig.title}
          showBackButton={navConfig.showBackButton}
          showProfileButton={navConfig.showProfileButton}
          onBackClick={handleBackClick}
          onProfileClick={handleProfileClick}
        />
      )}

      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        <Route
          path={ROUTE_MY}
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route path={ROUTE_ORDER} element={<OrderLayout />}>
          <Route
            path=":productId"
            element={
              <PrivateRoute>
                <OrderPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path={ROUTE_NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </MobileLayout>
  );
}

export default App;
