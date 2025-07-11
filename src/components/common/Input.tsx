import styled from "@emotion/styled";
import type { Theme } from "@emotion/react";
import {
  type InputHTMLAttributes,
  type CSSProperties,
  forwardRef,
} from "react";

type InputVariant = "bottom-border" | "outlined";

interface StyledInputProps {
  hasError?: boolean;
  variant?: InputVariant;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  hasError?: boolean;
  variant?: InputVariant;
}

type VariantStyle = {
  border?: CSSProperties["border"];
  borderBottom?: CSSProperties["borderBottom"];
  borderRadius?: CSSProperties["borderRadius"];
  padding: CSSProperties["padding"];
  "&:focus": {
    borderColor?: CSSProperties["borderColor"];
    borderBottomColor?: CSSProperties["borderBottomColor"];
  };
};

const getVariantStyles = (
  theme: Theme,
): Record<InputVariant, VariantStyle> => ({
  outlined: {
    border: `1px solid ${theme.color.gray[500]}`,
    borderRadius: "8px",
    padding: theme.spacing2,
    "&:focus": {
      borderColor: theme.color.gray[700],
    },
  },
  "bottom-border": {
    border: "none",
    borderBottom: `1px solid ${theme.color.gray[500]}`,
    padding: `${theme.spacing2} 0`,
    "&:focus": {
      borderBottomColor: theme.color.gray[900],
    },
  },
});

const getErrorStyles = (
  theme: Theme,
): Record<InputVariant, Pick<VariantStyle, "border" | "borderBottom">> => ({
  outlined: {
    border: `1px solid ${theme.color.red[700]}`,
  },
  "bottom-border": {
    borderBottom: `1px solid ${theme.color.red[700]}`,
  },
});

const StyledInput = styled.input<StyledInputProps>(
  ({ theme, hasError, variant = "bottom-border" }) => {
    const baseVariantStyle = getVariantStyles(theme)[variant];
    const errorVariantStyle = getErrorStyles(theme)[variant];

    return {
      width: "100%",
      outline: "none",
      backgroundColor: "transparent",
      transition: "border-color 0.2s ease, border-bottom-color 0.2s ease",

      ...baseVariantStyle,

      fontSize: `${theme.typography.label1Regular.fontSize}`,
      lineHeight: `${theme.typography.label1Regular.lineHeight}`,
      fontWeight: `${theme.typography.label1Regular.fontWeight}`,

      ...(hasError && errorVariantStyle),

      "&:placeholder": {
        color: `${theme.color.gray[600]}`,
        fontSize: `${theme.typography.title2Regular.fontSize}`,
        lineHeight: `${theme.typography.title2Regular.lineHeight}`,
        fontWeight: `${theme.typography.title2Regular.fontWeight}`,
      },
    };
  },
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type = "text",
      hasError,
      variant = "bottom-border",
      ...props
    },
    ref,
  ) => {
    return (
      <StyledInput
        ref={ref}
        placeholder={placeholder}
        type={type}
        hasError={hasError}
        variant={variant}
        {...props}
      />
    );
  },
);
