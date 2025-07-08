import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding: ${theme.spacing[3]} 0;
  background: ${theme.colors.semanticColor.backgroundColor.default};
`

export const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 80px;
  height: auto;
  margin-right: ${theme.spacing[2]};
  border: ${({ isSelected }) =>
    isSelected
      ? `3px solid ${theme.colors.colorScale.gray[1000]}`
      : `3px solid ${theme.colors.semanticColor.outlineColor.disabled}`};
  border-radius: ${theme.spacing[2]};
  cursor: pointer;
`
