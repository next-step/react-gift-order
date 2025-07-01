import type { ComponentPropsWithoutRef } from 'react'
import { theme } from '@/theme'
import styled from '@emotion/styled'

type ButtonType = 'login' | 'More' | 'home'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonType: ButtonType
}

const buttonStyleByType = {
  login: {
    width: '100%',
    height: theme.spacing[11],
    margin: `${theme.spacing[8]} 0 0 0`,
    background: theme.colors.semanticColor.brandColor.kakaoYellow,
    color: theme.colors.semanticColor.textColor.default,
    typography: theme.typography.label2Regular,
    hoverBackground: theme.colors.semanticColor.brandColor.kakaoYellowHover,
    border: 'none',
  },
  More: {
    width: '70%',
    height: `${theme.spacing[10]}`,
    margin: `${theme.spacing[4]} auto`,
    background: theme.colors.colorScale.gray[0],
    color: theme.colors.semanticColor.textColor.default,
    typography: theme.typography.label1Regular,
    hoverBackground: theme.colors.colorScale.gray[100],
    border: `1px solid ${theme.colors.colorScale.gray[400]}`,
  },
  home: {
    width: '160px',
    height: theme.spacing[11],
    margin: theme.spacing[10],
    background: theme.colors.semanticColor.brandColor.kakaoYellow,
    color: theme.colors.semanticColor.textColor.default,
    typography: theme.typography.label1Regular,
    hoverBackground: theme.colors.semanticColor.brandColor.kakaoYellowHover,
    border: 'none',
  },
}

const StyledButton = styled.button<{ $buttonType: ButtonType }>`
  display: block;
  cursor: pointer;
  border-radius: ${theme.spacing[1]};
  width: ${({ $buttonType }) => buttonStyleByType[$buttonType].width};
  height: ${({ $buttonType }) => buttonStyleByType[$buttonType].height};
  margin: ${({ $buttonType }) => buttonStyleByType[$buttonType].margin};
  background-color: ${({ $buttonType }) =>
    buttonStyleByType[$buttonType].background};
  color: ${({ $buttonType }) => buttonStyleByType[$buttonType].color};
  border: ${({ $buttonType }) => buttonStyleByType[$buttonType].border};

  ${({ $buttonType }) => buttonStyleByType[$buttonType].typography};

  &:hover {
    background-color: ${({ $buttonType }) =>
      buttonStyleByType[$buttonType].hoverBackground};
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
