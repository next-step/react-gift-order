import { Outlet } from 'react-router-dom'
import TopNavigationBar from '@/component/TopNavigationBar/TopNavigationBar'

const NavLayout = () => {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
    </>
  )
}

export default NavLayout
