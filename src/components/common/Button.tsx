import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 12px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  ${({ theme, variant }) => {
    if (variant === 'primary') {
      return `
        background-color: ${theme.semanticColors.brand.kakaoYellow};
        color: ${theme.semanticColors.text.default};

        &:hover {
          background-color: ${theme.semanticColors.brand.kakaoYellowHover};
        }
      `;
    }
    if (variant === 'secondary') {
      return `
        background-color: #fff;
        border: 1px solid ${theme.semanticColors.border.default};
        color: ${theme.semanticColors.text.default};
        width: 100%;
        margin: ${theme.spacing.spacing6} auto ${theme.spacing.spacing6};
        padding: ${theme.spacing.spacing3} 0;
        ${theme.typography.body.body2Bold};
      `;
    }
  }}
`;
