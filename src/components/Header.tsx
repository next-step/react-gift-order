import styled from '@emotion/styled'
import { FaChevronLeft, FaUser } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing.spacing14};
  padding: 0 ${({ theme }) => theme.spacing.spacing14};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border-bottom: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 720px;
  z-index: 999;
`

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`

const IconButton = styled.button<{ disabled?: boolean }>`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  color: ${({ theme }) => theme.colors.gray.gray800};
  z-index: 1;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isLoginPage = location.pathname === '/login'

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoLogin = () => {
    if (!isLoginPage) navigate('/login')
  }

  return (
    <HeaderWrapper>
      <IconButton onClick={handleGoBack}>
        <FaChevronLeft />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton onClick={handleGoLogin} disabled={isLoginPage}>
        <FaUser />
      </IconButton>
    </HeaderWrapper>
  )
}

export default Header
