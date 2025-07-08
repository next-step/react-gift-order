import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  padding: ${theme.spacing[1]} ${theme.spacing[4]};
  margin: ${theme.spacing[3]} 0px;
  background: ${theme.colors.semanticColor.backgroundColor.default};
`

export const Title = styled.p`
  ${theme.typography.title1Bold};
  line-height: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[5]};
`

export const InputContainer = styled.div`
  margin-bottom: ${theme.spacing[2]};
`

export const InputText = styled.input<{ isError: boolean }>`
  width: 100%;
  height: ${theme.spacing[10]};
  padding: ${theme.spacing[2]};
  border: 1px solid
    ${({ isError }) =>
      isError
        ? theme.colors.semanticColor.stateColor.critical
        : theme.colors.colorScale.gray[500]};
  border-radius: ${theme.spacing[1]};
`

export const SubText = styled.div`
  ${theme.typography.label2Regular};
  color: ${theme.colors.colorScale.gray[600]};
  margin-bottom: ${theme.spacing[3]};
`

export const ErrorText = styled.p`
  text-align: left;
  color: ${theme.colors.semanticColor.stateColor.critical};
  ${theme.typography.label2Regular};
  margin-top: ${theme.spacing[1]};
  margin-bottom: ${theme.spacing[2]};
`
