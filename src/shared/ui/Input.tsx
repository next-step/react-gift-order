import { forwardRef } from "react";

import { useErrorOnChangeReset } from "@/shared/hooks/useErrorOnChangeState";

import * as Styles from "./Input.styled";

export interface InputProps extends React.ComponentProps<"input"> {
    width?: SizeProp;
    height?: SizeProp;

    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ width, height, error, ...props }, ref) => {
        const { error: err, onChange } = useErrorOnChangeReset<HTMLInputElement>({
            error,
            onChange: props.onChange,
        });

        return (
            <>
                <Styles.Input
                    ref={ref}
                    width={width}
                    height={height}
                    error={err}
                    onChange={onChange}
                    {...props}
                />
                {err && <Styles.Error>{err}</Styles.Error>}
            </>
        );
    },
);

export interface InputFieldGroupProps extends InputProps {
    id: string;
    align: "vertical" | "horizontal";

    label?: string;
}

export const InputFieldGroup = forwardRef<HTMLInputElement, InputFieldGroupProps>(
    ({ id, align, label, error, width, height, ...props }, ref) => {
        const { error: err, onChange } = useErrorOnChangeReset<HTMLInputElement>({
            error,
            onChange: props.onChange,
        });

        return (
            <Styles.InputFieldGroupContainer align={align}>
                {label && <Styles.InputLabel htmlFor={id}>{label}</Styles.InputLabel>}

                <Styles.InputElementContainer>
                    <Input
                        id={id}
                        ref={ref}
                        width={width}
                        height={height}
                        error={err}
                        onChange={onChange}
                        {...props}
                    />
                </Styles.InputElementContainer>
            </Styles.InputFieldGroupContainer>
        );
    },
);
