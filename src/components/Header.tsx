/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../styles/colors'
import { typography } from '../styles/typography'
import { spacing } from '../styles/spacing'
import { useNavigate } from 'react-router-dom'

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
  return (
    <header css={headerStyle}>
      <button css={buttonStyle('left')} aria-label="뒤로가기" onClick={onBack}>
        &lt;
      </button>
      <h1 css={titleStyle}>선물하기</h1>
      <button
        css={buttonStyle('right')}
        aria-label="로그인"
        onClick={() => navigate('/login')}
      >
        ⭑
      </button>
    </header>
  )
}

export default Header
