import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import type { ReactNode } from 'react'

// * 페이지 컨테이너 Props 타입
interface PageContainerProps {
  children: ReactNode
  className?: string
}

// * 공통 페이지 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 100vh;

  margin: 0 auto;
  padding-top: ${theme.spacing.spacing11};

  background-color: ${theme.semanticColors.background.default};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// * 페이지 컨테이너 컴포넌트
// ? 페이지 마다 flex 정렬 및 기타 스타일 형태가 조금씩 다를 수 있으므로 확장 가능하도록 작성
export const PageContainer = ({ children, className }: PageContainerProps) => {
  return <Container className={className}>{children}</Container>
}
