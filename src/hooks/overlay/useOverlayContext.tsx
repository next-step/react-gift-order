import { OverlayContext } from "@/contexts/overlay/OverlayContext";
import { useContext } from "react";

export const useOverlayContext = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay는 OverlayProvider 안에서 사용되어야 합니다.");
  }
  return context;
};
