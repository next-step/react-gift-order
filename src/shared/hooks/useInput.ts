import { useRef, useState } from "react";

export type UseInputOptions = {
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (value: string) => void;
};

export const useInput = ({
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
}: UseInputOptions) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const onBlur = (event: FocusEvent) => {
        const target = event.currentTarget as HTMLInputElement;
        if (target.value !== value) setValue(target.value);
        if (onBlurCallback) onBlurCallback(target.value);
    };

    const onChange = (event: Event) => {
        const target = event.currentTarget as HTMLInputElement;
        if (target.value !== value) setValue(target.value);
        if (onChangeCallback) onChangeCallback(target.value);
    };

    const onFocus = (event: FocusEvent) => {
        const target = event.currentTarget as HTMLInputElement;
        if (target.value !== value) setValue(target.value);
        if (onFocusCallback) onFocusCallback(target.value);
    };

    return {
        inputRef,
        value,
        setValue,
        errorMessage,
        setErrorMessage,

        inputProps: {
            onBlur,
            onChange,
            onFocus,
        },
    };
};
