import type { CSSProperties } from "react";

import { useErrorOnChangeReset } from "@/shared/hooks/useErrorOnChangeState";

import * as Styles from "./TextArea.styled";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];

    error?: string;
}

export const TextArea = ({ width, height, error, ...props }: TextAreaProps) => {
    const { error: err, onChange } = useErrorOnChangeReset<HTMLTextAreaElement>({
        error,
        onChange: props.onChange,
    });

    return (
        <>
            <Styles.TextAreaElement
                width={width}
                height={height}
                error={err}
                onChange={onChange}
                {...props}
            />
            {err && <Styles.Error>{err}</Styles.Error>}
        </>
    );
};
