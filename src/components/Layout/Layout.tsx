import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout; 