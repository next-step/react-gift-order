import { forwardRef, Fragment } from "react";

import * as Styles from "@/shared/ui/Input.styled";

export interface InputProps extends React.ComponentProps<"input"> {
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
    return (
        <Fragment>
            <Styles.InputElement type="text" ref={ref} error={error} {...props} />
            <Styles.InputErrorMessage>{error}</Styles.InputErrorMessage>
        </Fragment>
    );
});
