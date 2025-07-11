import type {
  OverlayController,
  OverlayElementWithController,
  OverlayOptions,
} from "@/hooks/overlay/types";
import { useOverlayContext } from "@/hooks/overlay/useOverlayContext";
import { useCallback, useRef, useState, type ReactElement } from "react";

export const useOverlay = () => {
  const { mount, unmount, unmountAll } = useOverlayContext();
  const overlayIdRef = useRef<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(
    (
      element: ReactElement | OverlayElementWithController,
      options?: OverlayOptions,
    ) => {
      if (overlayIdRef.current) {
        unmount(overlayIdRef.current);
      }

      const controller: OverlayController = {
        close: () => {
          if (overlayIdRef.current) {
            unmount(overlayIdRef.current);
            overlayIdRef.current = null;
            setIsOpen(false);
          }
        },
        isOpen: true,
      };

      const elementToRender =
        typeof element === "function" ? element(controller) : element;

      const id = mount(elementToRender, {
        ...options,
        onClose: () => {
          options?.onClose?.();
          overlayIdRef.current = null;
          setIsOpen(false);
        },
      });

      overlayIdRef.current = id;
      setIsOpen(true);
      return id;
    },
    [mount, unmount],
  );

  const close = useCallback(() => {
    if (overlayIdRef.current) {
      unmount(overlayIdRef.current);
      overlayIdRef.current = null;
      setIsOpen(false);
    }
  }, [unmount]);

  return { open, close, unmountAll, isOpen };
};
