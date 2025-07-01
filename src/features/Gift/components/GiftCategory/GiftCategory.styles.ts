import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  margin: ${theme.spacing[4]} ${theme.spacing[0]};
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.colorScale.gray[0]};
`

export const Title = styled.h2`
  ${theme.typography.title1Bold};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  margin-top: ${theme.spacing[3]};
`

export const Item = styled.div`
  text-align: center;
  cursor: pointer;
  border-radius: ${theme.spacing[2]};
  padding: ${theme.spacing[1]};
`

export const ItemImage = styled.img`
  width: ${theme.spacing[12]};
  height: ${theme.spacing[12]};
`

export const ItemName = styled.p`
  ${theme.typography.label2Regular};
  margin-top: ${theme.spacing[2]};
`
