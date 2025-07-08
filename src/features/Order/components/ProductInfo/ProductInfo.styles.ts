import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  margin-top: ${theme.spacing[6]};
  padding: ${theme.spacing[2]};
  background: ${theme.colors.semanticColor.backgroundColor.default};
`

export const Title = styled.h3`
  ${theme.typography.title1Bold};
  line-height: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
`

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.colors.colorScale.gray[300]};
  border-radius: ${theme.spacing[3]};
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[4]};
`

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: ${theme.spacing[2]};
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`

export const ProductName = styled.div`
  ${theme.typography.body1Bold};
`

export const BrandName = styled.div`
  ${theme.typography.label1Regular};
  color: ${theme.colors.colorScale.gray[700]};
`

export const ProductPrice = styled.div`
  ${theme.typography.label1Bold};
`
