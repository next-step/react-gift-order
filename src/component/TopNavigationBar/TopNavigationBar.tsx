import NavArrowLeftIcon from '@/assets/icons/nav-arrow-left.svg?react'
import ProfileIcon from '@/assets/icons/profile.svg?react'
import { Nav, Icon } from './TopNavigationBar.styles'
import { useUserContext } from '@/contexts/UserContext'
import { useLocation, useNavigate } from 'react-router-dom'

const TopNavigationBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn } = useUserContext()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  const handleGoLogin = () => {
    if (isLoggedIn) {
      if (location.pathname !== '/my') {
        navigate('/my')
      }
    } else {
      if (location.pathname !== '/login') {
        navigate('/login')
      }
    }
  }

  return (
    <Nav>
      <Icon onClick={handleGoBack}>
        <NavArrowLeftIcon />
      </Icon>
      <div>선물하기</div>
      <Icon onClick={handleGoLogin}>
        <ProfileIcon />
      </Icon>
    </Nav>
  )
}

export default TopNavigationBar
