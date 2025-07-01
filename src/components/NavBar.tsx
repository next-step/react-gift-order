import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import backIcon from '@/assets/back.png'
import loginIcon from '@/assets/user.png'
import { spacing } from '@/theme/spacing'
import { useAuth } from '@/contexts/AuthContext'

interface NavBarProps {
  onBack?: () => void
  logoSrc: string
  onLoginClick?: () => void
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${spacing.spacing12};
`

const IconButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

const LogoLink = styled.a`
  flex: 1;
  text-align: center;
`

const NavBar = ({ onBack, logoSrc, onLoginClick }: NavBarProps) => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) return onBack()
    navigate(-1)
  }

  const { isLoggedIn } = useAuth()

  const handleLoginClick = onLoginClick ?? (() => {
    navigate(isLoggedIn ? '/profile' : '/login')
  })

  
  return (
    <Nav>
      <IconButton onClick={handleBack} aria-label="back">
        <img src={backIcon} alt="back" height="28" />
      </IconButton>
      <LogoLink href="/">
        <img src={logoSrc} alt="logo" height="28" />
      </LogoLink>
      <IconButton
        onClick={handleLoginClick}
        aria-label={isLoggedIn ? 'profile' : 'login'}
      >
        <img
          src={loginIcon}
          alt={isLoggedIn ? 'profile' : 'login'}
          height="24"
        />
        </IconButton>
    </Nav>
  )
}

export default NavBar