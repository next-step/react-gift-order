import type { ComponentPropsWithoutRef } from 'react'
import styled from '@emotion/styled'
import { theme } from '@/theme'

type Variant = 'primary' | 'outlined'
type Size = 'large' | 'medium' | 'small'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  size?: Size
  disabled?: boolean
  fullWidth?: boolean
}

const variantStyles = {
  primary: {
    background: theme.colors.semanticColor.brandColor.kakaoYellow,
    inactiveBackground: theme.colors.colorScale.yellow[300],
    hoverBackground: theme.colors.semanticColor.brandColor.kakaoYellowHover,
    color: theme.colors.semanticColor.textColor.default,
    inactiveColor: theme.colors.colorScale.gray[700],
    border: 'none',
  },
  outlined: {
    background: theme.colors.colorScale.gray[0],
    inactiveBackground: theme.colors.colorScale.gray[0],
    hoverBackground: theme.colors.colorScale.gray[100],
    color: theme.colors.semanticColor.textColor.default,
    inactiveColor: theme.colors.semanticColor.textColor.default,
    border: `1px solid ${theme.colors.colorScale.gray[400]}`,
  },
}

const sizeStyles = {
  large: {
    width: '360px',
    height: theme.spacing[11],
    padding: `0 ${theme.spacing[6]}`,
    typography: theme.typography.label1Regular,
  },
  medium: {
    width: '260px',
    height: theme.spacing[10],
    padding: `0 ${theme.spacing[5]}`,
    typography: theme.typography.label1Regular,
  },
  small: {
    width: '160px',
    height: theme.spacing[9],
    padding: `0 ${theme.spacing[4]}`,
    typography: theme.typography.label2Regular,
  },
}

const setButtonStyle = ({
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
}: ButtonProps) => {
  return {
    width: fullWidth ? '100%' : sizeStyles[size].width,
    height: sizeStyles[size].height,
    padding: sizeStyles[size].padding,
    typography: sizeStyles[size].typography,
    background: disabled
      ? variantStyles[variant].inactiveBackground
      : variantStyles[variant].background,
    hoverBackground: disabled
      ? variantStyles[variant].inactiveBackground
      : variantStyles[variant].hoverBackground,
    color: disabled
      ? variantStyles[variant].inactiveColor
      : variantStyles[variant].color,
    border: variantStyles[variant].border,
    cursor: disabled ? 'not-allowed' : 'pointer',
  }
}

const StyledButton = styled.button<ButtonProps>`
  display: block;
  margin: 0 auto;
  border-radius: ${theme.spacing[1]};

  ${({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
  }) => {
    const {
      width,
      height,
      padding,
      typography,
      background,
      hoverBackground,
      color,
      border,
      cursor,
    } = setButtonStyle({ variant, size, disabled, fullWidth })

    return `
      width: ${width};
      height: ${height};
      padding: ${padding};
      ${typography};
      background-color: ${background};
      color: ${color};
      border: ${border};
      cursor: ${cursor};

      &:hover {
        background-color: ${hoverBackground};
      }
    `
  }}
`

const MyButton = ({
  variant,
  size,
  disabled,
  fullWidth,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default MyButton
