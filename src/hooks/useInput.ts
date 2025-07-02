import { useState } from 'react';

type Validator = (value: string) => string;

export function useInput(validator: Validator) {
    const [value, setValue] = useState(''); // 사용자가 적는 글자
    const [error, setError] = useState(''); // 현재 에러 메시지

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        const msg = validator(value.trim());
        setError(msg);
    }

    const isValid = (error === '') && (value.trim() !== '');

    return { value, onChange, onBlur, error, isValid };
}