import { useEffect } from 'react';
import styled from '@emotion/styled';
import { createOutsideClickHandler } from '@/utils';
import { useBodyScrollLock } from '@/hooks';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  showCloseButton?: boolean;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  padding: 16px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div<{
  size: 'small' | 'medium' | 'large';
  isOpen: boolean;
}>`
  background: white;
  border-radius: 16px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '400px';
      case 'large':
        return '800px';
      default:
        return '600px';
    }
  }};
  transform: ${(props) =>
    props.isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)'};
  transition: transform 0.3s ease;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ModalContent = styled.div`
  padding: 24px;
`;

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'medium',
  showCloseButton = true,
}: ModalProps) => {
  const handleOutsideClick = createOutsideClickHandler(onClose);

  // ESC 키 처리
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 스크롤 방지
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <Overlay isOpen={isOpen} onClick={handleOutsideClick}>
      <ModalContainer size={size} isOpen={isOpen}>
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {showCloseButton && (
              <CloseButton onClick={onClose} title="닫기">
                <CloseIcon />
              </CloseButton>
            )}
          </ModalHeader>
        )}
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
