import type { ReactElement } from 'react';

export interface ModalOptions {
  closeOnDimClick?: boolean;
}

export interface ModalContextType {
  open: (element: ReactElement, options?: ModalOptions) => void;
  close: () => Promise<void>;
}

export interface ModalState {
  isOpen: boolean;
  element: ReactElement | null;
  options: ModalOptions;
}
