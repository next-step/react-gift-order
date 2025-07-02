import type { ComponentPropsWithoutRef } from 'react'
import { theme } from '@/theme'
import styled from '@emotion/styled'

type ButtonType = 'login' | 'more' | 'home'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonType: ButtonType
}

const buttonStyleByType = {
  login: {
    width: '100%',
    height: theme.spacing[11],
    margin: `${theme.spacing[8]} 0 0 0`,
    activeBackground: theme.colors.semanticColor.brandColor.kakaoYellow,
    inactiveBackground: theme.colors.colorScale.yellow[300],
    activeColor: theme.colors.semanticColor.textColor.default,
    inactiveColor: theme.colors.colorScale.gray[700],
    typography: theme.typography.label2Regular,
    hoverBackground: theme.colors.semanticColor.brandColor.kakaoYellowHover,
    border: 'none',
  },
  more: {
    width: '70%',
    height: `${theme.spacing[10]}`,
    margin: `${theme.spacing[4]} auto`,
    activeBackground: theme.colors.colorScale.gray[0],
    inactiveBackground: theme.colors.colorScale.gray[0],
    activeColor: theme.colors.semanticColor.textColor.default,
    inactiveColor: theme.colors.semanticColor.textColor.default,
    typography: theme.typography.label1Regular,
    hoverBackground: theme.colors.colorScale.gray[100],
    border: `1px solid ${theme.colors.colorScale.gray[400]}`,
  },
  home: {
    width: '160px',
    height: theme.spacing[11],
    margin: theme.spacing[10],
    activeBackground: theme.colors.semanticColor.brandColor.kakaoYellow,
    inactiveBackground: theme.colors.semanticColor.brandColor.kakaoYellow,
    activeColor: theme.colors.semanticColor.textColor.default,
    inactiveColor: theme.colors.semanticColor.textColor.default,
    typography: theme.typography.label1Regular,
    hoverBackground: theme.colors.semanticColor.brandColor.kakaoYellowHover,
    border: 'none',
  },
}

const StyledButton = styled.button<{
  $buttonType: ButtonType
}>`
  display: block;
  border-radius: ${theme.spacing[1]};
  width: ${({ $buttonType }) => buttonStyleByType[$buttonType].width};
  height: ${({ $buttonType }) => buttonStyleByType[$buttonType].height};
  margin: ${({ $buttonType }) => buttonStyleByType[$buttonType].margin};
  border: ${({ $buttonType }) => buttonStyleByType[$buttonType].border};
  ${({ $buttonType }) => buttonStyleByType[$buttonType].typography};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ disabled, $buttonType }) =>
    disabled
      ? buttonStyleByType[$buttonType].inactiveBackground
      : buttonStyleByType[$buttonType].activeBackground};

  color: ${({ disabled, $buttonType }) =>
    disabled
      ? buttonStyleByType[$buttonType].inactiveColor
      : buttonStyleByType[$buttonType].activeColor};

  &:hover {
    background-color: ${({ disabled, $buttonType }) =>
      disabled
        ? buttonStyleByType[$buttonType].inactiveBackground
        : buttonStyleByType[$buttonType].hoverBackground};
  }
`

const MyButton = ({ buttonType, children, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" $buttonType={buttonType} {...props}>
      {children}
    </StyledButton>
  )
}

export default MyButton
