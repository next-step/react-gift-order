/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import type { Theme } from '@emotion/react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLoginContext } from '@/contexts/LoginContext'

const statusBarStyle = (theme: Theme) => css`
  width: 100%;
  height: 8px;
  background: ${theme.colors.gray.gray900};
  @media (min-width: 720px) {
    display: none;
  }
`

const headerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.gray.gray00};
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.colors.gray.gray200};
`

const iconButtonStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.gray.gray900};
  font-size: 1.7rem;
`

const logoStyle = (theme: Theme) => css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.brown.brown800};
  letter-spacing: -0.5px;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', Arial, sans-serif;
  flex: 1;
  text-align: center;
`

const Header = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn } = useLoginContext()
  return (
    <>
      <div css={statusBarStyle(theme)} />
      <header css={headerStyle(theme)}>
        <button
          css={iconButtonStyle(theme)}
          aria-label="뒤로가기"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosNewRoundedIcon fontSize="inherit" />
        </button>
        <div css={logoStyle(theme)}>선물하기</div>
        <button
          css={iconButtonStyle(theme)}
          aria-label="프로필"
          onClick={() => isLoggedIn ? navigate('/my') : navigate('/login', { state: { from: location } })}
        >
          <PersonOutlineRoundedIcon fontSize="inherit" />
        </button>
      </header>
    </>
  )
}

export default Header
