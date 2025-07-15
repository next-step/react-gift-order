import { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isReceiveModalOpen: boolean;
  openReceiveModal: () => void;
  closeReceiveModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);

  const openReceiveModal = () => setIsReceiveModalOpen(true);

  const closeReceiveModal = () => setIsReceiveModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isReceiveModalOpen, openReceiveModal, closeReceiveModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
