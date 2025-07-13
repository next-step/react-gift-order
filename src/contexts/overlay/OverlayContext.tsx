import { createContext } from "react";
import type { OverlayContextValue } from "@/hooks/overlay/types";

export const OverlayContext = createContext<OverlayContextValue | null>(null);
