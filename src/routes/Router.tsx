import PrivateRoute from '@/routes/PrivateRoute';
import MyPage from '@/My/pages/MyPage';

<Route
  path="/my"
  element={
    <PrivateRoute>
      <MyPage />
    </PrivateRoute>
  }
/>;
