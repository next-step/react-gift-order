import { useEffect, useRef, useState } from "react";

export type UseInputOptions = {
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (value: string) => void;
};

export const useInput = ({ onChange, onBlur, onFocus }: UseInputOptions) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        const blurEventHandler = (event: FocusEvent) => {
            const target = event.currentTarget as HTMLInputElement;
            if (target.value !== value) setValue(target.value);
            if (onBlur) onBlur(target.value);
        };

        const changeEventHandler = (event: Event) => {
            const target = event.currentTarget as HTMLInputElement;
            if (target.value !== value) setValue(target.value);
            if (onChange) onChange(target.value);
        };

        const focusEventHandler = (event: FocusEvent) => {
            const target = event.currentTarget as HTMLInputElement;
            if (target.value !== value) setValue(target.value);
            if (onFocus) onFocus(target.value);
        };

        const $input = inputRef.current;
        $input?.addEventListener("blur", blurEventHandler);
        $input?.addEventListener("input", changeEventHandler);
        $input?.addEventListener("focus", focusEventHandler);

        return () => {
            $input?.removeEventListener("blur", blurEventHandler);
            $input?.removeEventListener("input", changeEventHandler);
            $input?.removeEventListener("focus", focusEventHandler);
        };
    }, [onBlur, onChange, onFocus, value]);

    return [inputRef, value, errorMessage, setErrorMessage] as const;
};
