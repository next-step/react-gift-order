import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: auto;
  margin-top: ${theme.spacing[10]};
  padding: ${theme.spacing[6]};
`

export const NotFoundImg = styled.img`
  width: 152px;
  height: 152px;
  margin: ${theme.spacing[8]};
`

export const Title = styled.div`
  ${theme.typography.title1Bold};
  margin: ${theme.spacing[3]};
`

export const SubTitle = styled.div`
  ${theme.typography.subtitle1Regular};
  margin-bottom: ${theme.spacing[5]};
`
