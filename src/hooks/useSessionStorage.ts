import { useState } from "react";

const useSessionStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const updateValue = (value: T) => {
    setValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const removeValue = () => {
    setValue(initialValue);
    sessionStorage.removeItem(key);
  };

  return { value, updateValue, removeValue };
};

export default useSessionStorage;
