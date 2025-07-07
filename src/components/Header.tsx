/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../styles/colors'
import { typography } from '../styles/typography'
import { spacing } from '../styles/spacing'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: spacing.spacing14,
  borderBottom: `1px solid ${colors.borderDefault}`,
  position: 'relative',
  background: colors.backgroundDefault,
})

const buttonStyle = (side: 'left' | 'right') => css({
  position: 'absolute',
  [side]: spacing.spacing4,
  background: 'none',
  border: 'none',
  fontSize: 24,
  cursor: 'pointer',
  color: colors.textDefault,
})

const titleStyle = css({ ...typography.title1Bold, color: colors.textDefault })

interface HeaderProps {
  onBack?: () => void
}

const Header = ({ onBack }: HeaderProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useAuth()
  
  const handleProfileClick = () => {
    // 로그인 상태에 따라 마이페이지 또는 로그인 페이지로 이동
    if (isAuthenticated) {
      navigate('/my')
    } else {
      navigate('/login')
    }
  }
  
  // 뒤로가기 핸들러
  const handleBackClick = () => {
    // React Router의 useLocation으로 현재 경로 확인
    const isHomePage = location.pathname === '/';
    
    // 홈페이지에서는 뒤로가기를 무시
    if (isHomePage) {
      return;
    }
    
    if (onBack) {
      // 커스텀 뒤로가기 함수가 있으면 사용
      onBack();
    } else {
      // 없으면 브라우저 히스토리의 뒤로가기 사용
      navigate(-1);
    }
  };
  
  return (
    <header css={headerStyle}>
      <button css={buttonStyle('left')} aria-label="뒤로가기" onClick={handleBackClick}>
        &lt;
      </button>
      <h1 css={titleStyle}>선물하기</h1>
      <button
        css={buttonStyle('right')}
        aria-label={isAuthenticated ? "마이페이지" : "로그인"}
        onClick={handleProfileClick}
      >
        👤
      </button>
    </header>
  )
}

export default Header
