import { useState, useEffect } from "react";

/**
 * 로컬 스토리지에 상태를 저장하고 관리하는 훅
 * @param key 로컬 스토리지 키
 * @param initialValue 초기값
 */
export const useLocalStorageState = <T>(key: string, initialValue: T) => {
    const [state, setState] = useState<T>(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch {
            console.warn(`[useLocalStorageState] 로컬 스토리지 저장 실패 : ${key}`);
        }
    }, [key, state]);

    return [state, setState] as const;
};
