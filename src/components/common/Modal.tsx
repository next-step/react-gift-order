import styled from '@emotion/styled';
import type { ReactNode } from 'react';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const ModalWrapper = styled.div`
  background: #fff;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 590px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 24px;
`;

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>{children}</ModalWrapper>
    </Overlay>
  );
}
