import React, { useEffect } from "react"
import styled from "@emotion/styled"

interface ModalProps {
  open: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  max-height: 90vh;
  max-width: 90vw;
  overflow-y: auto;
  overflow-x: hidden;
`

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      // 스크롤바 너비 계산
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // body 스타일 저장
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // 스크롤 막기 + 스크롤바 너비만큼 패딩 추가
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // 정리 함수
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container> 
        {children}
      </Container>
    </>
  )
}

export default Modal