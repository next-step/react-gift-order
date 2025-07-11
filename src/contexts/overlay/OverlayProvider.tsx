import { OverlayRenderer } from "@/hooks/overlay/OverlayRenderer";
import { OverlayContext } from "@/contexts/overlay/OverlayContext";
import type { OverlayElement, OverlayOptions } from "@/hooks/overlay/types";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

let overlayId = 0;

interface OverlayProviderProps {
  children: ReactNode;
}

export const OverlayProvider = ({ children }: OverlayProviderProps) => {
  const [overlays, setOverlays] = useState<Map<string, OverlayElement>>(
    new Map(),
  );

  const mount = useCallback(
    (element: ReactElement, options?: OverlayOptions) => {
      const id = `overlay-${++overlayId}`;
      const overlayElement: OverlayElement = {
        id,
        element,
        options: {
          dimmed: true,
          closeOnBackdropClick: true,
          closeOnEscape: true,
          preventScroll: true,
          ...options,
        },
      };
      setOverlays(prev => new Map(prev).set(id, overlayElement));
      return id;
    },
    [],
  );
  const unmount = useCallback((id: string) => {
    setOverlays(prev => {
      const next = new Map(prev);
      const overlay = next.get(id);
      if (overlay?.onClose) {
        overlay.onClose();
      }
      next.delete(id);
      return next;
    });
  }, []);

  const unmountAll = useCallback(() => {
    setOverlays(prev => {
      prev.forEach(overlay => overlay.onClose?.());
      return new Map();
    });
  }, []);

  useEffect(() => {
    const hasOverlays = overlays.size > 0;
    const shouldPreventScroll = Array.from(overlays.values()).some(
      overlay => overlay.options?.preventScroll !== false,
    );
    if (hasOverlays && shouldPreventScroll) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [overlays]);

  const context = useMemo(
    () => ({ mount, unmount, unmountAll }),
    [mount, unmount, unmountAll],
  );

  return (
    <OverlayContext.Provider value={context}>
      {children}
      <OverlayRenderer overlays={overlays} unmount={unmount} />
    </OverlayContext.Provider>
  );
};
