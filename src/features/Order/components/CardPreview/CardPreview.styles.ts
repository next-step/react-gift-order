import styled from '@emotion/styled'
import { theme } from '@/theme'

export const PreviewContainer = styled.div`
  text-align: center;
  background: ${theme.colors.semanticColor.backgroundColor.default};
`

export const CardImage = styled.img`
  width: 350px;
  border-radius: ${theme.spacing[3]};
  box-shadow: 0px ${theme.spacing[3]} ${theme.spacing[3]} rgba(0, 0, 0, 0.15);
`
