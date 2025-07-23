import styled from '@emotion/styled';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'disabled' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  width?: string;
  height?: string;
  rounded?: 'full' | boolean;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: 0;
  padding: 0;
  border: none;
  border-radius: ${({ rounded }) => {
    switch (rounded) {
      case 'full':
        return '9999px';
      case true:
        return '4px';
      case false:
        return '0px';
      default:
        return '4px';
    }
  }};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.semanticColors.brand.kakaoYellow;
      case 'secondary':
        return theme.colors.gray.gray300;
      case 'ghost':
        return 'transparent';
      default:
        return theme.semanticColors.brand.kakaoYellow;
    }
  }};
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.gray.gray900;
      default:
        return theme.colors.gray.gray900;
    }
  }};
  opacity: ${({ variant }) => {
    switch (variant) {
      case 'disabled':
        return 0.5;
      default:
        return 1;
    }
  }};
`;
