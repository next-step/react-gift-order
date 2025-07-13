import type { OverlayElement } from "@/hooks/overlay/types";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const OverlayContainer = styled.div<{ isOpen: boolean }>(
  ({ isOpen, theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: isOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: theme.zIndex.modal,
  }),
);

const OverlayBackdrop = styled.div<{ dimmed: boolean }>(({ dimmed }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: dimmed ? "rgba(0,0,0,0.5)" : "transparent",
  animation: dimmed ? "fadeIn 0.2s ease-out" : undefined,
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const OverlayContent = styled.div({
  position: "relative",
  zIndex: 1,
  animation: "slideUp 0.2s ease-out",
  "@keyframes slideUp": {
    from: {
      opacity: 0,
      transform: "translateY(10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

interface OverlayRendererProps {
  overlays: Map<string, OverlayElement>;
  unmount: (id: string) => void;
}

export const OverlayRenderer = ({
  overlays,
  unmount,
}: OverlayRendererProps) => {
  const portalRoot = useRef<HTMLElement | null>(null);

  if (!portalRoot.current) {
    let element = document.getElementById("overlay-root");
    if (!element) {
      element = document.createElement("div");
      element.id = "overlay-root";
      document.body.appendChild(element);
    }
    portalRoot.current = element;
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const overlayArray = Array.from(overlays.values());
        const topOverlay = overlayArray[overlayArray.length - 1];
        if (topOverlay?.options?.closeOnEscape !== false) {
          unmount(topOverlay.id);
        }
      }
    };
    if (overlays.size > 0) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [overlays, unmount]);

  const overlayElements = Array.from(overlays.values());

  if (!portalRoot.current || overlayElements.length === 0) {
    return null;
  }

  return createPortal(
    overlayElements.map(({ id, element, options }) => (
      <OverlayContainer key={id} isOpen={true} className={options?.className}>
        <OverlayBackdrop
          dimmed={options?.dimmed ?? true}
          onClick={
            options?.closeOnBackdropClick ? () => unmount(id) : undefined
          }
        />
        <OverlayContent>{element}</OverlayContent>
      </OverlayContainer>
    )),
    portalRoot.current,
  );
};
