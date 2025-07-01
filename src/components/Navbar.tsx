import styled from '@emotion/styled'
import { ChevronLeft, UserRound } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavbarContainer = styled.nav`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  color: #000;
`

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const Logo = styled.img`
  height: 32px;
`

const SideButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
`

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavbarContainer>
      <SideButton onClick={() => window.history.back()}>
        <ChevronLeft size={20} color="#000" />
      </SideButton>

      <LogoWrapper>
        <Logo src="/logo.png" alt="카카오 선물하기 로고" />
      </LogoWrapper>

     
      <SideButton onClick={() => navigate('/login', { state: { from: location } })}>
        <UserRound size={20} color="#000" />
      </SideButton>
    </NavbarContainer>
  )
}
