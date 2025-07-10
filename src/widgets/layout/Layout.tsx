import { Outlet } from 'react-router-dom'
import { Nav } from '../header/Nav'

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
