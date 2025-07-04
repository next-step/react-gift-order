import * as Styles from "@/shared/ui/Input.styled";

export interface InputProps extends React.ComponentProps<"input"> {
    error?: string;
}

export const Input = ({ error, ...props }: InputProps) => {
    return (
        <>
            <Styles.InputElement type="text" error={error} {...props} />
            <Styles.InputErrorMessage>{error}</Styles.InputErrorMessage>
        </>
    );
};
