import type { ReactElement } from "react";

export interface OverlayElement {
  id: string;
  element: ReactElement;
  onClose?: () => void;
  options?: OverlayOptions;
}

export interface OverlayOptions {
  dimmed?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  preventScroll?: boolean;
  className?: string;
  onClose?: () => void;
}

export interface OverlayContextValue {
  mount(element: ReactElement, options?: OverlayOptions): string;
  unmount(id: string): void;
  unmountAll(): void;
}

export interface OverlayController {
  close: () => void;
  isOpen: boolean;
}

export type OverlayElementWithController = (
  controller: OverlayController,
) => React.ReactElement;
