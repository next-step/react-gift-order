import type { ModalContextType, ModalOptions, ModalState } from '@/types/modal';
import styled from '@emotion/styled';
import { createContext, useCallback, useContext, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    element: null,
    options: { closeOnDimClick: true },
  });

  const resolveRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (modalState.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalState.isOpen]);

  const open = useCallback((element: React.ReactElement, options: ModalOptions = {}) => {
    setModalState({
      isOpen: true,
      element,
      options: { closeOnDimClick: true, ...options },
    });
  }, []);

  const close = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setModalState((prev) => ({
        ...prev,
        isOpen: false,
      }));
    });
  }, []);

  const handleDimClick = useCallback(() => {
    if (modalState.options.closeOnDimClick) {
      close();
    }
  }, [modalState.options.closeOnDimClick, close]);

  const handleAnimationEnd = useCallback(() => {
    if (!modalState.isOpen) {
      setModalState((prev) => ({
        ...prev,
        element: null,
      }));
      if (resolveRef.current) {
        resolveRef.current();
        resolveRef.current = null;
      }
    }
  }, [modalState.isOpen]);

  const value = {
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {(modalState.isOpen || modalState.element) &&
        createPortal(
          <ModalDimWrapper
            isOpen={modalState.isOpen}
            onClick={handleDimClick}
            onAnimationEnd={handleAnimationEnd}
          >
            <ModalWrapper onClick={(e) => e.stopPropagation()}>{modalState.element}</ModalWrapper>
          </ModalDimWrapper>,
          document.body,
        )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal은 ModalProvider 내에서만 사용할 수 있습니다.');
  }

  return context;
};

const ModalDimWrapper = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? 'visible' : 'hidden',
  transition: 'opacity 300ms ease, visibility 300ms ease',
  padding: '16px',
}));

const ModalWrapper = styled.div(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
