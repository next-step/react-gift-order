import { forwardRef } from "react";

import * as Styles from "./Input.styled";

export interface InputProps extends React.ComponentProps<"input"> {
    width?: SizeProp;
    height?: SizeProp;
}

export const InputElement = forwardRef<HTMLInputElement, InputProps>(
    ({ width, height, ...props }, ref) => {
        return <Styles.Input ref={ref} width={width} height={height} {...props} />;
    },
);

export interface InputFieldGroupProps extends InputProps {
    id: string;
    align: "vertical" | "horizontal";

    label?: string;
    error?: string;
}

export const InputFieldGroup = forwardRef<HTMLInputElement, InputFieldGroupProps>(
    ({ id, align, label, error, width, height, ...props }, ref) => {
        return (
            <>
                <Styles.InputFieldGroupContainer align={align}>
                    {label && <Styles.InputLabel htmlFor={id}>{label}</Styles.InputLabel>}

                    <Styles.InputElementContainer>
                        <InputElement id={id} ref={ref} width={width} height={height} {...props} />
                        {error && <Styles.Error>{error}</Styles.Error>}
                    </Styles.InputElementContainer>
                </Styles.InputFieldGroupContainer>
            </>
        );
    },
);
