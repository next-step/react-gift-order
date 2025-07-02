import { useState } from "react";

type Validator = (value: string) => string;

export function useInput(initialValue = "", validate: Validator) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState("");
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (error) {
            setError("");
        }
    };

    const onBlur = () => {
        const message = validate(value);
        setError(message);
    };

    const isValid = !validate(value);

    return {value, error, onChange, onBlur, isValid};
}