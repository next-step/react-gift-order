import styled from '@emotion/styled'
import { theme } from '@/theme'

export const ProductTab = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[0]};
`

export const ProductItem = styled.div`
  position: relative;
  background: ${theme.colors.semanticColor.backgroundColor.default};
  border-radius: ${theme.spacing[2]};
  padding: ${theme.spacing[1]};
  margin-bottom: ${theme.spacing[4]};
`

export const ProductImage = styled.img`
  width: 100%;
  border-radius: ${theme.spacing[2]};
`

export const Rank = styled.div<{ rank: number }>`
  position: absolute;
  top: ${theme.spacing[2]};
  left: ${theme.spacing[2]};
  padding: ${theme.spacing[0]} ${theme.spacing[1]};
  border-radius: ${theme.spacing[1]};
  background-color: ${({ rank }) =>
    rank <= 3
      ? theme.colors.colorScale.red[600]
      : theme.colors.colorScale.gray[200]};
  color: ${({ rank }) =>
    rank <= 3
      ? theme.colors.colorScale.gray[0]
      : theme.colors.colorScale.gray[1000]};
  ${theme.typography.label2Bold}
`
