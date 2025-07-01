import {
  Container,
  FormContainer,
  KakaoTitle,
  InputForm,
  LoginButton,
} from './Input.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import KaKaoTitleIcon from '@/assets/icons/kakao-title.svg?react'

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
        <InputForm placeholder="이메일" type="emial"></InputForm>
        <InputForm placeholder="비밀번호" type="password"></InputForm>
        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      </FormContainer>
    </Container>
  )
}

export default Input
