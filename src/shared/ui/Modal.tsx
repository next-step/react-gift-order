import styled from '@emotion/styled'
import type { ReactNode } from 'react'

export const Modal = ({ children, className }: ModalProps) => {
  return <Container className={className}>{children}</Container>
}

// * 페이지 컨테이너 Props 타입
interface ModalProps {
  children: ReactNode
  className?: string
}

// * 모달 컨테이너
const Container = styled.div`
  max-width: 51rem;
  width: 90%;
`
