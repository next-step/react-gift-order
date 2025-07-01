import {
  Container,
  FormContainer,
  KakaoTitle,
  InputForm,
} from './LoginForm.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import KaKaoTitleIcon from '@/assets/icons/kakao-title.svg?react'
import MyButton from '@/component/Button/Button'

const Input: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const hasPreviousPage = location.key !== 'default'

  const handleLoginClick = () => {
    if (hasPreviousPage) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <Container>
      <FormContainer>
        <KakaoTitle>
          <KaKaoTitleIcon />
        </KakaoTitle>
        <InputForm placeholder="이메일" type="email" />
        <InputForm placeholder="비밀번호" type="password" />
        <MyButton buttonType="login" onClick={handleLoginClick}>
          로그인
        </MyButton>
      </FormContainer>
    </Container>
  )
}

export default Input
