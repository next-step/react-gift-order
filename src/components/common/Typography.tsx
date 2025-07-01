import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

//* Typography 컴포넌트
export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  as = 'span',
  className,
}) => {
  return (
    <StyledTypography as={as} variant={variant} className={className}>
      {children}
    </StyledTypography>
  )
}

export default Typography

//* Typography 타입 정의
type TypographyVariant =
  | 'title1Bold'
  | 'title1Regular'
  | 'title2Bold'
  | 'title2Regular'
  | 'subtitle1Bold'
  | 'subtitle1Regular'
  | 'subtitle2Bold'
  | 'subtitle2Regular'
  | 'body1Bold'
  | 'body1Regular'
  | 'body2Bold'
  | 'body2Regular'
  | 'label1Bold'
  | 'label1Regular'
  | 'label2Bold'
  | 'label2Regular'

interface TypographyProps {
  variant: TypographyVariant
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

//* Typography 스타일 매핑
const typographyStyleMap = {
  title1Bold: theme.typography.title.title1Bold,
  title1Regular: theme.typography.title.title1Regular,
  title2Bold: theme.typography.title.title2Bold,
  title2Regular: theme.typography.title.title2Regular,
  subtitle1Bold: theme.typography.subtitle.subtitle1Bold,
  subtitle1Regular: theme.typography.subtitle.subtitle1Regular,
  subtitle2Bold: theme.typography.subtitle.subtitle2Bold,
  subtitle2Regular: theme.typography.subtitle.subtitle2Regular,
  body1Bold: theme.typography.body.body1Bold,
  body1Regular: theme.typography.body.body1Regular,
  body2Bold: theme.typography.body.body2Bold,
  body2Regular: theme.typography.body.body2Regular,
  label1Bold: theme.typography.label.label1Bold,
  label1Regular: theme.typography.label.label1Regular,
  label2Bold: theme.typography.label.label2Bold,
  label2Regular: theme.typography.label.label2Regular,
}

//* Typography 스타일을 가져오는 유틸리티 함수
export const getTypographyStyle = (variant: TypographyVariant) => {
  return typographyStyleMap[variant]
}

//* styled-components에서 사용할 수 있는 mixin 함수
//? 이미 여러 스타일이 지정된 컴포넌트 내부에 적용하기 위해 사용
export const typographyMixin = (variant: TypographyVariant) => {
  const styles = getTypographyStyle(variant)
  return `
    font-size: ${styles.fontSize};
    font-weight: ${styles.fontWeight};
    line-height: ${styles.lineHeight};
  `
}

//* 스타일이 적용된 컴포넌트
const StyledTypography = styled.span<{ variant: TypographyVariant }>`
  ${(props) => typographyMixin(props.variant)}
`
