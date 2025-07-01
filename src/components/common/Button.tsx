import styled from "@emotion/styled";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  width: string;
  children: ReactNode;
}

const StyledButton = styled.button<ButtonProps>(
  ({ theme, variant = "primary", size = "medium", width = "auto" }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    width,

    ...(size === "large" && {
      height: "44px",
      padding: `${theme.spacing3} ${theme.spacing6}`,
    }),
    ...(size === "medium" && {
      padding: `${theme.spacing4} ${theme.spacing6}`,
    }),

    ...(variant === "primary" && {
      backgroundColor: theme.color.yellow[600],
      color: theme.color.gray[900],
      border: "none",
    }),
    ...(variant === "secondary" && {
      backgroundColor: theme.color.gray[0],
      color: theme.color.gray[900],
      border: "1px solid rgb(220,222,227)",
    }),

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
      "&:hover": {
        cursor: "not-allowed",
      },
    },
  }),
);

export const Button = ({
  variant = "primary",
  size = "medium",
  width = "auto",
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      width={width}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
