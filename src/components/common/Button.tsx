import styled from "@emotion/styled";
import type { Theme } from "@emotion/react";
import type { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

type ButtonVariant = "primary" | "secondary" | "outlined";
type ButtonSize = "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  width: string;
  children: ReactNode;
}

type VariantStyle = {
  backgroundColor: CSSProperties["backgroundColor"];
  color: CSSProperties["color"];
  border: CSSProperties["border"];
};

const getVariantStyles = (
  variant: ButtonVariant,
  theme: Theme,
): VariantStyle => {
  //필요하면 object 형식으로 추가하기 -> danger같은 위험 버튼
  const styles: Record<ButtonVariant, VariantStyle> = {
    primary: {
      backgroundColor: theme.color.yellow[600],
      color: theme.color.gray[900],
      border: "none",
    },
    secondary: {
      backgroundColor: theme.color.gray[0],
      color: theme.color.gray[900],
      border: "1px solid rgb(220,222,227)",
    },
    outlined: {
      backgroundColor: theme.color.gray[300],
      color: theme.color.gray[900],
      border: "none",
    },
  };
  return styles[variant];
};

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
      padding: `${theme.spacing3} 0`,
    }),
    ...(size === "medium" && {
      padding: `${theme.spacing3} ${theme.spacing4}`,
    }),

    ...getVariantStyles(variant, theme),

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
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      width={width}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
