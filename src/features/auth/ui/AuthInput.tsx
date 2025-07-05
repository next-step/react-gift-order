import * as Styles from "@/features/auth/ui/AuthInput.styled";

export interface AuthInputProps extends React.ComponentProps<"input"> {
    error?: string;
}

export const AuthInput = ({ error, ...props }: AuthInputProps) => {
    return (
        <>
            <Styles.InputElement type="text" error={error} {...props} />
            <Styles.InputErrorMessage>{error}</Styles.InputErrorMessage>
        </>
    );
};
