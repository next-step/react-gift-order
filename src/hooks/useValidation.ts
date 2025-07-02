// src/hooks/useValidation.ts

import { useState } from 'react';
// ChangeEvent, FocusEvent 는 타입이니까 import type 으로 받아옵니다.
import type { ChangeEvent } from 'react';

type Validator<T> = (value: T) => string | null;

export function useValidation<T>(
    initial: T,
    validator: Validator<T>
) {
    const [value, setValue] = useState(initial);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as unknown as T);
        if (error) setError(null);
    };

    // onBlur 에서 e 를 안 쓰니까 파라미터를 제거합니다.
    const onBlur = () => {
        setTouched(true);
        const message = validator(value);
        setError(message);
    };

    const isValid = touched && !validator(value);

    return { value, error, isValid, onChange, onBlur };
}
