import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.body);
  }, []);

  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
};

export default ModalPortal;
