import React, { type ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'toggle'
  | 'icon'
  | 'category';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  active?: boolean; // toggle 버튼용
  fullWidth?: boolean;
}

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  active: boolean;
  fullWidth: boolean;
}>`
  /* 기본 스타일 */
  border: none;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 비활성화 상태 */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* 크기별 스타일 */
  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${theme.spacing.spacing2} ${theme.spacing.spacing3};
          font-size: ${theme.typography.body2Regular.fontSize};
          font-weight: ${theme.typography.body2Regular.fontWeight};
          min-height: 32px;
        `;
      case 'md':
        return `
          padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
          font-size: ${theme.typography.body1Regular.fontSize};
          font-weight: ${theme.typography.body1Regular.fontWeight};
          min-height: 44px;
        `;
      case 'lg':
        return `
          padding: ${theme.spacing.spacing4} ${theme.spacing.spacing6};
          font-size: ${theme.typography.body1Bold.fontSize};
          font-weight: ${theme.typography.body1Bold.fontWeight};
          min-height: 48px;
        `;
    }
  }}

  /* 전체 너비 */
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  /* Variant별 스타일 */
  ${({ variant, theme, active }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.semanticColors.kakaoYellow};
          color: ${theme.colors.gray900};
          border-radius: 6px;

          &:hover:not(:disabled) {
            background-color: ${theme.semanticColors.kakaoYellowHover};
          }

          &:active:not(:disabled) {
            background-color: ${theme.semanticColors.kakaoYellowActive};
          }
        `;

      case 'secondary':
        return `
          background-color: white;
          color: ${theme.semanticColors.text.default};
          border: 1px solid ${theme.colors.gray300};
          border-radius: 8px;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray100};
            border-color: ${theme.colors.gray400};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.gray200};
          }
        `;

      case 'ghost':
        return `
          background: none;
          color: ${theme.semanticColors.text.default};
          border-radius: 6px;
          min-width: 44px;
          min-height: 44px;

          &:hover:not(:disabled) {
            background-color: ${theme.semanticColors.background.fill};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.gray200};
          }
        `;

      case 'toggle':
        const isActive = active;
        return `
          border-radius: 20px;
          border: 1px solid ${isActive ? theme.semanticColors.kakaoYellow : theme.colors.gray300};
          background-color: ${isActive ? theme.semanticColors.kakaoYellow : 'white'};
          color: ${isActive ? theme.colors.gray900 : theme.colors.gray600};
          font-weight: ${isActive ? 600 : 400};
          min-height: 36px;

          &:hover:not(:disabled) {
            background-color: ${isActive ? theme.semanticColors.kakaoYellowHover : theme.colors.gray100};
            border-color: ${isActive ? theme.semanticColors.kakaoYellowHover : theme.colors.gray400};
          }

          &:active:not(:disabled) {
            transform: scale(0.98);
          }
        `;

      case 'icon':
        return `
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: ${theme.semanticColors.kakaoYellow};
          color: ${theme.colors.gray900};

          &:hover:not(:disabled) {
            background-color: ${theme.semanticColors.kakaoYellowHover};
          }

          &:active:not(:disabled) {
            background-color: ${theme.semanticColors.kakaoYellowActive};
          }
        `;

      case 'category':
        return `
          background: none;
          color: ${theme.semanticColors.text.default};
          border-radius: 12px;
          min-height: 80px;
          flex-direction: column;

          &:hover:not(:disabled) {
            background-color: ${theme.semanticColors.background.fill};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.gray200};
            transform: scale(0.98);
          }
        `;

      default:
        return '';
    }
  }}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  active = false,
  fullWidth = false,
  type = 'button',
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      active={active}
      fullWidth={fullWidth}
      type={type}
      {...rest}
    >
      {rest.children}
    </StyledButton>
  );
};

export default Button;
