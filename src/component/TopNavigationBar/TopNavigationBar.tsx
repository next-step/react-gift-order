import NavArrowLeftIcon from '@/assets/icons/nav-arrow-left.svg?react'
import ProfileIcon from '@/assets/icons/profile.svg?react'
import { Nav, Icon } from './TopNavigationBar.styles'
import { useNavigate } from 'react-router-dom'

const TopNavigationBar: React.FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  const handleLGoLogin = () => {
    if (location.pathname !== '/login') {
      navigate('/login')
    }
  }

  return (
    <Nav>
      <Icon onClick={handleGoBack}>
        <NavArrowLeftIcon />
      </Icon>
      <div>선물하기</div>
      <Icon onClick={handleLGoLogin}>
        <ProfileIcon />
      </Icon>
    </Nav>
  )
}

export default TopNavigationBar
