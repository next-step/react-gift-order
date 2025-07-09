import * as Styles from "@/features/auth/ui/AuthInput.styled";

export interface AuthInputProps extends React.ComponentProps<"input"> {
    error?: string;
}

export const AuthInput = ({ error, ...props }: AuthInputProps) => {
    return (
        <>
            <Styles.AuthInputElement type="text" error={error} {...props} />
            <Styles.AuthInputErrorMessage>{error}</Styles.AuthInputErrorMessage>
        </>
    );
};
