import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from './Button'
import { Typography } from './Typography'

// * 모달 컴포넌트
export const Modal = ({
  children,
  className,
  onClose,
  showCloseButton = true,
  title,
  description,
  footer,
}: ModalProps) => {
  return (
    <Overlay>
      <Container className={className}>
        {showCloseButton && onClose && (
          <CloseButton onClick={onClose} variant="ghost" size="small">
            <X size={20} />
          </CloseButton>
        )}

        {title && (
          <ModalHeader>
            <ModalTitle variant="title1Bold">{title}</ModalTitle>
            {description}
          </ModalHeader>
        )}

        <ModalContent hasHeader={!!title} hasFooter={!!footer}>
          {children}
        </ModalContent>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </Container>
    </Overlay>
  )
}

// * 모달 Props 타입
interface ModalProps {
  children: ReactNode
  className?: string
  onClose?: () => void
  showCloseButton?: boolean
  title?: string
  description?: ReactNode
  footer?: ReactNode
}

// * 모달 오버레이 (배경)
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(42, 48, 56, 0.6); /* gray900 with opacity */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing.spacing4};
`

// * 모달 컨테이너
const Container = styled.div`
  position: relative;
  max-width: 34.5rem;
  width: 98%;
  display: flex;
  flex-direction: column;
  min-height: 200px;

  background-color: ${theme.semanticColors.background.default};
  border-radius: ${theme.spacing.spacing2};
  overflow: hidden;

  animation: modalAppear 0.2s ease-out;

  /* 모달 애니메이션 (열기/닫기) */
  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`

// * 닫기 버튼
const CloseButton = styled(Button)`
  position: absolute;
  top: ${theme.spacing.spacing3};
  right: ${theme.spacing.spacing3};
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
`

// * 모달 헤더
const ModalHeader = styled.div`
  padding: ${theme.spacing.spacing5};
  /* border-bottom: 1px solid ${theme.semanticColors.border.default}; */

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${theme.spacing.spacing1};
`

// * 모달 제목
const ModalTitle = styled(Typography)`
  text-align: center;
`

// * 모달 컨텐츠
const ModalContent = styled.div<{ hasHeader: boolean; hasFooter: boolean }>`
  flex: 1;
  padding: ${theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing4};

  ${({ hasHeader }) => !hasHeader && `padding-top: ${theme.spacing.spacing6};`}
  ${({ hasFooter }) => !hasFooter && `padding-bottom: ${theme.spacing.spacing6};`}
`

// * 모달 푸터
const ModalFooter = styled.div`
  padding: ${theme.spacing.spacing4};
  /* border-top: 1px solid ${theme.semanticColors.border.default}; */
  display: flex;
  gap: ${theme.spacing.spacing2};
  justify-content: flex-end;
`
