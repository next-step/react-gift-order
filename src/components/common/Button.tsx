import styled from "@emotion/styled";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outlined";
type ButtonSize = "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  width: string;
  children: ReactNode;
}
//TODO : 버튼 컴포넌트 별도의 스타일 파일로 분리해서 로직 및 스타일 분리? variants가 늘어난다면 props 관리 필요
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

    ...(variant === "outlined" && {
      backgroundColor: theme.color.gray[300],
      color: theme.color.gray[900],
      border: "none",
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
