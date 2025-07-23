
import { createContext, useContext, useState, type ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface ModalContextType {
  open: (modalContent: ReactNode) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const open = (content: ReactNode) => {
    setModalContent(content);
  };

  const close = () => {
    setModalContent(null);
  };

  const contextValue = useMemo(() => ({ open, close }), []);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modalContent && createPortal(modalContent, document.body)}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
