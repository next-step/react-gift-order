import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LocalStorageState {
  mainTab: number;
  subTab: number;
}

const initialState: LocalStorageState = {
  mainTab: 0,
  subTab: 0,
};

interface LocalStorageContextType {
  state: LocalStorageState;
  setItem: <K extends keyof LocalStorageState>(
    key: K,
    value: LocalStorageState[K]
  ) => void;
}

const LocalStorageContext = createContext<LocalStorageContextType | undefined>(
  undefined
);

export const LocalStorageProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<LocalStorageState>(() => {
    const loadedState = { ...initialState };

    Object.keys(initialState).forEach((key) => {
      try {
        const item = localStorage.getItem(key);
        if (item !== null) {
          (loadedState as Record<string, unknown>)[key] = JSON.parse(item);
        }
      } catch (error) {
        console.warn(`${key} 값 불러오기 실패:`, error);
      }
    });

    return loadedState;
  });

  const setItem = <K extends keyof LocalStorageState>(
    key: K,
    value: LocalStorageState[K]
  ) => {
    try {
      localStorage.setItem(key as string, JSON.stringify(value));
      setState((prev) => ({
        ...prev,
        [key]: value,
      }));
    } catch (error) {
      console.warn(`${key as string} 값 저장 실패:`, error);
    }
  };

  return (
    <LocalStorageContext.Provider value={{ state, setItem }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext);
  if (context === undefined) {
    throw new Error(
      "useLocalStorageContext 는 LocalStorageProvider 안에서 사용해야 합니다"
    );
  }
  return context;
};
