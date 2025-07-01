import { useEffect, useState } from "react";

export function useLocalStorageState<T extends string>(
  key: string,
  defaultValue: T,
  validValues: readonly T[],
): [T, (val: T) => void] {
  const [state, setState] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved && validValues.includes(saved as T)
      ? (saved as T)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
