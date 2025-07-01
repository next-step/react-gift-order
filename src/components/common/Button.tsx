import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { typographyMixin } from './Typography'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

// * 버튼 컴포넌트
// ? shadcn ui 에서의 버튼 컴포넌트를 참고하여 작성 (+ size 옵션 추가)
// ? https://ui.shadcn.com/docs/components/button
export const Button = ({ children, variant = 'kakao', size = 'medium', ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

// * 버튼 변형 타입
type ButtonVariant = 'kakao' | 'outline' | 'ghost'

// * 버튼 크기 타입
type ButtonSize = 'small' | 'medium' | 'large'

// * 버튼 Props 타입
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

// * 스타일드 버튼
const StyledButton = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  border: none;
  border-radius: ${theme.spacing.spacing1};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  /* 크기별 스타일 */
  ${({ size }) => {
    switch (size) {
      case 'small': // * 작은 버튼
        return `
          width: fit-content;
          padding: ${theme.spacing.spacing3} ${theme.spacing.spacing4};
          ${typographyMixin('body2Regular')}
        `
      case 'medium': // * 중간 버튼
        return `
          max-width: 480px;
          width: 100%;
          padding: ${theme.spacing.spacing3} ${theme.spacing.spacing5};
          ${typographyMixin('body2Regular')}
        `
      case 'large': // * 큰 버튼
        return `
          max-width: 720px;
          width: 100%;
          padding: ${theme.spacing.spacing3} ${theme.spacing.spacing5};
          ${typographyMixin('subtitle1Regular')}
        `
    }
  }}

  /* variant 스타일 */
  ${({ variant }) => {
    switch (variant) {
      case 'kakao': // * 카카오 브랜드 컬러 버튼
        return `
          background-color: ${theme.semanticColors.brand.kakaoYellow};
          color: ${theme.semanticColors.text.default};

          &:hover {
            background-color: ${theme.semanticColors.brand.kakaoYellowHover};
          }

          &:active {
            background-color: ${theme.semanticColors.brand.kakaoYellowActive};
          }

          &:disabled {
            background-color: ${theme.semanticColors.background.disabled};
            color: ${theme.semanticColors.text.disabled};
            cursor: not-allowed;
          }
        `
      case 'outline': // * 테두리 있는 버튼
        return `
          background-color: ${theme.colors.gray.gray00};
          color: ${theme.colors.gray.gray800};
          border: 1px solid ${theme.colors.gray.gray400};

          &:hover {
            background-color: ${theme.colors.gray.gray100};
            border-color: ${theme.colors.gray.gray500};
          }

          &:active {
            background-color: ${theme.colors.gray.gray200};
          }

          &:disabled {
            background-color: ${theme.semanticColors.background.disabled};
            color: ${theme.semanticColors.text.disabled};
            border-color: ${theme.semanticColors.border.disabled};
            cursor: not-allowed;
          }
        `
      case 'ghost': // * 배경 없는 버튼
        return `
          background-color: transparent;
          color: ${theme.semanticColors.text.default};

          &:hover {
            background-color: ${theme.colors.gray.gray100};
          }

          &:active {
            background-color: ${theme.colors.gray.gray200};
          }

          &:disabled {
            color: ${theme.semanticColors.text.disabled};
            cursor: not-allowed;
          }
        `
    }
  }}
`
