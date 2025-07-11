import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Title = styled.div`
  ${theme.typography.title1Bold};
  line-height: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
`

export const SubTitle = styled.div`
  ${theme.typography.label1Regular};
  color: ${theme.colors.colorScale.gray[700]};
  margin-bottom: ${theme.spacing[5]};
`
export const Content = styled.div`
  background: ${theme.colors.semanticColor.backgroundColor.default};
  border-radius: ${theme.spacing[2]};
  padding: ${theme.spacing[5]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  margin-bottom: ${theme.spacing[4]};
`

export const ButtonConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing[3]};
  position: sticky;
  background: ${theme.colors.semanticColor.backgroundColor.default};
  bottom: ${theme.spacing[0]};
  z-index: 1;
`
