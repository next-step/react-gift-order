import styled from "@emotion/styled";
import type { InputHTMLAttributes } from "react";

interface StyledInputProps {
  hasError?: boolean;
}

const StyledInput = styled.input<StyledInputProps>(({ theme, hasError }) => ({
  width: "100%",
  padding: `${theme.spacing2} 0`,
  fontSize: `${theme.typography.label1Regular.fontSize}`,
  lineHeight: `${theme.typography.label1Regular.lineHeight}`,
  fontWeight: `${theme.typography.label1Regular.fontWeight}`,
  border: "none",
  borderBottom: hasError
    ? `1px solid ${theme.color.red[700]}`
    : `1px solid ${theme.color.gray[500]}`,
  outline: "none",
  backgroundColor: "transparent",
  transition: "border-bottom-color 0.2s ease",

  "&:placeholder": {
    color: `${theme.color.gray[600]}`,
    fontSize: `${theme.typography.title2Regular.fontSize}`,
    lineHeight: `${theme.typography.title2Regular.lineHeight}`,
    fontWeight: `${theme.typography.title2Regular.fontWeight}`,
  },

  "&:focus": {
    borderBottomColor: theme.color.gray[900],
  },
}));

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  hasError?: boolean;
}

export const Input = ({
  placeholder,
  type = "text",
  hasError,
  ...props
}: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      hasError={hasError}
      {...props}
    />
  );
};
