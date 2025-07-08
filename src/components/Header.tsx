import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import backIcon from '@/assets/back.png'
import loginIcon from '@/assets/user.png'
import { spacing } from '@/theme/spacing'
import { typography } from '@/theme/typography'
import { colors } from '@/theme/color'
import { useAuth } from '@/contexts/AuthContext'

interface HeaderProps {
  onBack?: () => void
  title?: string
  onLoginClick?: () => void
}

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${spacing.spacing12};
  padding: 0 ${spacing.spacing4};
  border-bottom: 1px solid ${colors.border.default};
`

const IconButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

const TitleLink = styled.a`
  flex: 1;
  text-align: center;
  font-size: ${typography.title2Bold.fontSize};
  font-weight: ${typography.title2Bold.fontWeight};
  line-height: ${typography.title2Bold.lineHeight};
  color: ${colors.text.default};
  text-decoration: none;
`

const Header = ({ onBack, onLoginClick, title = '선물하기' }: HeaderProps) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  const handleBack = () => {
    if (onBack) return onBack()
    navigate(-1)
  }

  const handleLoginClick = onLoginClick ?? (() => {
    navigate(isLoggedIn ? '/profile' : '/login')
  })

  
  return (
    <Nav>
      <IconButton onClick={handleBack} aria-label="back">
        <img src={backIcon} alt="back" height="28" />
      </IconButton>
      <TitleLink href="/">{title}</TitleLink>
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

export default Header
