import { useNavigate } from 'react-router-dom'
import { useUserContext } from '@/contexts/UserContext'
import { Container, Title, InfoText } from './UserInfo.styles'

import MyButton from '@/component/Button/Button'
const UserInfo = () => {
  const { user, logout } = useUserContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <Title>마이페이지</Title>
      <InfoText>
        {user?.nickname} 님 안녕하세요! <br /> 이메일 주소는 {user?.email}
        입니다.
      </InfoText>
      <MyButton variant="secondory" size="verySmall" onClick={handleLogout}>
        로그아웃
      </MyButton>
    </Container>
  )
}

export default UserInfo
