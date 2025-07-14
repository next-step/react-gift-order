import { useEffect, useState } from 'react';

export default function useLocalStorageState<T>(key: string, initialValue: T) {
    const [state, setState] = useState<T>(() => {
      try {
        const stored = localStorage.getItem(key);
        return stored !== null ? JSON.parse(stored) : initialValue;
      } catch (error) {
        console.error("localStorage parsing error", error);
      }
  });

  useEffect(() => {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("localStorage setItem error", error);
      }
    }, [key, state]);
    return [state, setState] as const;
}
