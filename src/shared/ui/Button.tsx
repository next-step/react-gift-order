import styled from "@emotion/styled";

export interface ButtonProps extends BoxSizing, React.ComponentProps<"button"> {
    variant: "primary" | "disabled";
    rounded?: "full" | boolean;
}

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};

    margin: 0;
    padding: 0;

    border: none;
    border-radius: ${({ rounded }) => {
        switch (rounded) {
            case "full":
                return "9999px";
            case true:
                return "4px";
            case false:
                return "0px";
            default:
                return "4px";
        }
    }};

    background-color: ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return theme.colors.yellow.yellow600;
            default:
                return theme.colors.yellow.yellow600;
        }
    }};

    color: ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return theme.colors.gray.gray900;
            default:
                return theme.colors.gray.gray900;
        }
    }};

    opacity: ${({ variant }) => {
        switch (variant) {
            case "primary":
                return 1;
            case "disabled":
                return 0.5;
            default:
                return 1;
        }
    }};
`;
