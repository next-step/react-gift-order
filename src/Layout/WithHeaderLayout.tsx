import { Outlet } from 'react-router-dom';
import Header from '@/Layout/Header';

type HeaderProps = {
  handleBackClick: () => void;
  handleLoginClick: () => void;
};

function WithHeaderLayout({ handleBackClick, handleLoginClick }: HeaderProps) {
  return (
    <>
      <Header onBackClick={handleBackClick} onLoginClick={handleLoginClick} />
      <Outlet />
    </>
  );
}

export default WithHeaderLayout;
