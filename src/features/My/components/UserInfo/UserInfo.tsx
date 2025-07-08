import { useNavigate } from 'react-router-dom'
import { useUserContext } from '@/contexts/UserContext'
import * as S from './UserInfo.styles'
import { ROUTE_PATH } from '@/routes/Router'

import MyButton from '@/component/Button/Button'
const UserInfo = () => {
  const { user, logout } = useUserContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(ROUTE_PATH.LOGIN)
  }

  return (
    <S.Container>
      <S.Title>마이페이지</S.Title>
      <S.InfoText>
        {user?.nickname} 님 안녕하세요! <br /> 이메일 주소는 {user?.email}
        입니다.
      </S.InfoText>
      <MyButton variant="secondory" size="verySmall" onClick={handleLogout}>
        로그아웃
      </MyButton>
    </S.Container>
  )
}

export default UserInfo
