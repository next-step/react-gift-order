import styled from "@emotion/styled";
import type { InputHTMLAttributes } from "react";

const StyledInput = styled.input(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing2} 0`,
  fontSize: `${theme.typography.label1Regular.fontSize}`,
  lineHeight: `${theme.typography.label1Regular.lineHeight}`,
  fontWeight: `${theme.typography.label1Regular.fontWeight}`,
  border: "none",
  borderBottom: "1px solid rgb(220, 222, 227)",
  outline: "none",
  backgroundColor: "transparent",
  transition: "border-bottom-color 0.2s ease",

  "&::placeholder": {
    color: "#999",
    fontSize: "14px",
  },

  "&:focus": {
    borderBottomColor: "#000",
  },
}));

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = ({ placeholder, type = "text", ...props }: InputProps) => {
  return <StyledInput placeholder={placeholder} type={type} {...props} />;
};
