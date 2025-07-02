import { useEffect, useState } from 'react';

export default function usePersistedState<T>(key: string, initialValue: T) {
    const [state, setState] = useState<T>(() => {
      try {
        const stored = localStorage.getItem(key);
        if (stored !== null) {
          return JSON.parse(stored);
        }
      } catch (error) {
        console.error("localStorage parsing error", error);
      }
      return initialValue;
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
