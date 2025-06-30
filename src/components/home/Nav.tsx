import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { Link, useNavigate } from 'react-router-dom'

// * 네비게이션
const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  width: 100%;
  max-width: 720px;
  height: 44px;

  margin: 0 auto;

  background-color: ${theme.colors.gray.gray00};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

// * 네비게이션 버튼
const NavButton = styled.button`
  height: 100%;
  aspect-ratio: 1 / 1; // 높이에 따라 너비 1:1로 자동 조정

  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`

// * 네비게이션 버튼 아이콘
const Icon = styled.span`
  font-family: 'Material Icons Outlined';
  font-size: ${theme.typography.title.title1Regular.fontSize};
`

// * 네비게이션 컴포넌트
export const Nav = () => {
  const navigate = useNavigate()

  return (
    <Navigation>
      <NavButton onClick={() => navigate(-1)}>
        {/* 뒤로가기 아이콘 - Material Icons 패키지 사용 */}
        <Icon>arrow_back_ios</Icon>
      </NavButton>
      <Link to="/" css={theme.typography.title.title1Bold}>
        선물하기
      </Link>
      {/* 로그인 페이지 이동 시 직전 위치 정보를 state로 넘겨줌 (로그인 시 이전 페이지로 Redirect되도록 하기 위해) */}
      <NavButton onClick={() => navigate('/login', { state: { from: location.pathname } })}>
        {/* 프로필 아이콘 - Material Icons 패키지 사용 */}
        <Icon>person</Icon>
      </NavButton>
    </Navigation>
  )
}
