import NavArrowLeftIcon from '@/assets/icons/nav-arrow-left.svg?react'
import ProfileIcon from '@/assets/icons/profile.svg?react'
import * as S from './TopNavigationBar.styles'
import { useUserContext } from '@/contexts/UserContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@/routes/Router'

const TopNavigationBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn } = useUserContext()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(ROUTE_PATH.GIFT)
    }
  }

  const handleGoLogin = () => {
    const targetPath = isLoggedIn ? ROUTE_PATH.MY : ROUTE_PATH.LOGIN
    if (location.pathname !== targetPath) navigate(targetPath)
  }

  const handleGoHome = () => {
    navigate(ROUTE_PATH.GIFT)
  }

  return (
    <S.Nav>
      <S.Icon onClick={handleGoBack}>
        <NavArrowLeftIcon />
      </S.Icon>
      <S.MainTitle onClick={handleGoHome}>선물하기</S.MainTitle>
      <S.Icon onClick={handleGoLogin}>
        <ProfileIcon />
      </S.Icon>
    </S.Nav>
  )
}

export default TopNavigationBar
