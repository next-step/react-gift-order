import { useState } from "react";

type Validator = (value: string) => string;

export function useValidate(value: string, validate:Validator) {
    const [error, setError] = useState("");

    const validateNow = () => {
        const message = validate(value);
        setError(message);
    };

    const onBlur = validateNow;
    const isValid = !validate(value);

    return {error, onBlur, isValid, validateNow};
}