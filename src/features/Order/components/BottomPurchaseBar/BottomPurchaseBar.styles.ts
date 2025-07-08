import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Footer = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 100;
  align-items: center;
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
`

export const PriceText = styled.p`
  ${theme.typography.title2Bold};
`
