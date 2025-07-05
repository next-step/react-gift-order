import { useState } from "react";

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
    const [value, setValue] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
        const target = event.currentTarget;
        if (onBlurCallback) onBlurCallback(target.value);
    };

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.currentTarget;
        if (target.value !== value) setValue(target.value);
        if (onChangeCallback) onChangeCallback(target.value);
    };

    const onFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
        const target = event.currentTarget;
        if (onFocusCallback) onFocusCallback(target.value);
    };

    return {
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
