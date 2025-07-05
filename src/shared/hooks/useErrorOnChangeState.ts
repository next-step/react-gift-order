import { useState, useEffect, useCallback } from "react";

export type UseErrorOnChangeResetOptions<T> = {
    error?: string;
    onChange?: (e: React.ChangeEvent<T>) => void;
};

export const useErrorOnChangeReset = <T>({ error, onChange }: UseErrorOnChangeResetOptions<T>) => {
    const [err, setErr] = useState<string | undefined>(error);

    const handleChange = useCallback(
        (e: React.ChangeEvent<T>) => {
            if (err != null) setErr(undefined);
            onChange?.(e);
        },
        [err, onChange],
    );

    useEffect(() => {
        setErr(error);
    }, [error]);

    return { error: err, onChange: handleChange };
};
