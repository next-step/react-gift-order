import { useLocalStorageContext } from "@/contexts/LocalStorageContext";

export const useMainTab = () => {
  const { state, setItem } = useLocalStorageContext();
  return [
    state.mainTab,
    (mainTab: number) => setItem("mainTab", mainTab),
  ] as const;
};

export const useSubTab = () => {
  const { state, setItem } = useLocalStorageContext();
  return [state.subTab, (subTab: number) => setItem("subTab", subTab)] as const;
};
