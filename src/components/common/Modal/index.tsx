import React from 'react';
import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footerContent }) => {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Header>
          {title}
        </S.Header>
        <S.Body>{children}</S.Body>
        {footerContent && <S.Footer>{footerContent}</S.Footer>}
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
