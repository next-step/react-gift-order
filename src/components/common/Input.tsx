import styled from "@emotion/styled";
import type { InputHTMLAttributes } from "react";

interface StyledInputProps {
  hasError?: boolean;
  variant?: "bottom-border" | "outlined";
}

const StyledInput = styled.input<StyledInputProps>(
  ({ theme, hasError, variant }) => ({
    width: "100%",
    outline: "none",
    backgroundColor: "transparent",
    transition: "border-color 0.2s ease, border-bottom-color 0.2s ease",

    ...(variant === "outlined"
      ? {
          border: hasError
            ? `1px solid ${theme.color.red[700]}`
            : `1px solid ${theme.color.gray[500]}`,
          borderRadius: "8px",
          padding: theme.spacing2,
          fontSize: `${theme.typography.label1Regular.fontSize}`,
          lineHeight: `${theme.typography.label1Regular.lineHeight}`,
          fontWeight: `${theme.typography.label1Regular.fontWeight}`,
          "&:focus": {
            borderColor: theme.color.gray[700],
          },
        }
      : {
          border: "none",
          borderBottom: hasError
            ? `1px solid ${theme.color.red[700]}`
            : `1px solid ${theme.color.gray[500]}`,
          padding: `${theme.spacing2} 0`,
          fontSize: `${theme.typography.label1Regular.fontSize}`,
          lineHeight: `${theme.typography.label1Regular.lineHeight}`,
          fontWeight: `${theme.typography.label1Regular.fontWeight}`,
          "&:focus": {
            borderBottomColor: theme.color.gray[900],
          },
        }),

    "&:placeholder": {
      color: `${theme.color.gray[600]}`,
      fontSize: `${theme.typography.title2Regular.fontSize}`,
      lineHeight: `${theme.typography.title2Regular.lineHeight}`,
      fontWeight: `${theme.typography.title2Regular.fontWeight}`,
    },
  }),
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  hasError?: boolean;
  variant?: "bottom-border" | "outlined";
}

export const Input = ({
  placeholder,
  type = "text",
  hasError,
  variant = "bottom-border",
  value,
  ...props
}: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      hasError={hasError}
      variant={variant}
      value={value === undefined ? "" : value}
      {...props}
    />
  );
};
