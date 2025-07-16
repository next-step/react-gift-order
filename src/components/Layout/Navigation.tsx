import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { AuthContext } from '@/context/AuthContext'
import { ArrowLeft, User } from 'lucide-react'

export function Navigation() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleAuthClick = () => {
    // 로그인 여부에 따라 이동할 경로만 달라집니다.
    navigate(user ? '/my' : '/login')
  }

  return (
    <NavBar>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
      </BackButton>
        <Spacer />  
      <Title onClick={() => navigate('/')}>선물하기</Title>
      <Spacer />

      <IconButton onClick={handleAuthClick}>
        <User size={20} />
      </IconButton>
    </NavBar>
  )
}

const NavBar = styled.nav`
position: 'relative';
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.semantic.background.default};
`

const BackButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  marginRight: theme.spacing.spacing4,
}))

const Title = styled.h1(({ theme }) => ({
  margin: 0,
  fontSize: theme.typography.title1Bold.fontSize,
  cursor: 'pointer',
  
}))

const Spacer = styled.div`
  flex: 1;
`

const IconButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: theme.colors.semantic.text.default,
}))
