import { css } from '@emotion/react'
import type { ReactNode } from 'react'

// 헤더 높이와 일치하는 상단 여백 + 약간의 추가 여백
const pageWrapperStyle = css({
  maxWidth: 720,
  margin: '0 auto',
  alignItems: 'center',
  //paddingTop: `calc(${spacing.spacing14} + 8px)`, // 헤더 높이 + 추가 여백
})

interface PageWrapperProps {
  children: ReactNode
}

// 공통 페이지 래퍼 컴포넌트
const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div css={pageWrapperStyle}>{children}</div>
}

export default PageWrapper
