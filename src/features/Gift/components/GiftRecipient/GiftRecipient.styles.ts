import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  margin: ${theme.spacing[4]};
  padding: ${theme.spacing[2]};
  border-radius: ${theme.spacing[4]};
  margin-top: ${theme.spacing[5]};
  background-color: ${theme.colors.colorScale.gray[0]};
`

export const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.spacing[10]};
  height: ${theme.spacing[10]};
  border-radius: ${theme.spacing[4]};
  border: 1px solid transparent;
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
  ${theme.typography.title1Bold.fontSize};
`

export const Text = styled.p`
  ${theme.typography.title2Bold};
`
