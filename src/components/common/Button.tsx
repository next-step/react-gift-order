import styled from "@emotion/styled";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "icon";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <Style
      variant={props.variant}
      size={props.size}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </Style>
  );
};

const Style = styled.button<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: Boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  cursor: ${({ disabled = false }) => (disabled ? "not-allowed" : "pointer")};
  border: none;

  ${({ size = "medium", theme }) => {
    switch (size) {
      case "small":
        return `
            min-hight: 1.875rem;
            font: ${theme.typography.body2Regular};
            padding: ${theme.spacing.spacing2};
        `;
      case "medium":
        return `
            min-hight: 2.75rem;
            font: ${theme.typography.body1Regular};
            padding: ${theme.spacing.spacing3};
        `;
      case "large":
        return `
            min-hight: 3.625rem;
            font: ${theme.typography.title2Regular};
            padding: ${theme.spacing.spacing4};
        `;
    }
  }};

  ${({ variant = "primary", theme }) => {
    switch (variant) {
      case "primary":
        return `
                min-height: 2.75rem;
                width: 25rem;
                background-color: ${theme.color.kakaoYellow};
                color: ${theme.color.gray800}
                font: ${theme.typography.body1Regular};
                border-radius: 4px;

                &:hover:not(:disabled) {
                    background-color: ${theme.color.kakaoYellowHover};
                }
                &:active:not(:disabled) {
                    background-color: ${theme.color.kakaoYellowActive};
                }
            `;
      case "secondary":
        return `
                min-height: 2.75rem;
                width: 25rem;
                background-color: ${theme.color.backgroundColor.default};
                color: ${theme.color.gray800}
                font: ${theme.typography.body1Regular};
                border: 1px solid ${theme.color.gray400};
                border-radius: 4px;

                &:hover:not(:disabled) {
                    background-color: ${theme.color.gray100};
                }
                &:active:not(:disabled) {
                    background-color: ${theme.color.gray500};
                }
            `;
      case "icon":
        return `
                background-color: transparent;
                font: ${theme.typography.body1Bold};
            `;
    }
  }};

  ${({ fullWidth = false }) => fullWidth && "width: 100%"}
`;

export default Button;
