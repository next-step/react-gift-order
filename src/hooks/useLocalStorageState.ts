import { useState } from 'react';

/**
 * localStorage와 자동으로 동기화되는 React state
 * @param key localStorage key
 * @param defaultValue localStorage에 값이 없을 때 사용할 기본값
 * @returns [value, setValue] tuple
 */
export function useLocalStorageState<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // localStorage에서 초기값 읽기
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error(`localStorage에서 ${key} 읽기 실패:`, error);
      return defaultValue;
    }
  });

  // 상태 변경 시 localStorage에 자동 저장
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      // 함수형 업데이트 지원
      const valueToStore = value instanceof Function ? value(state) : value;

      setState(valueToStore);

      // localStorage에 저장
      if (valueToStore === null || valueToStore === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`localStorage에 ${key} 저장 실패:`, error);
    }
  };

  return [state, setValue];
}
