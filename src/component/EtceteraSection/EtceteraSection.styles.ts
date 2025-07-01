import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  margin: ${theme.spacing[4]};
  padding: ${theme.spacing[5]} ${theme.spacing[4]};
  border-radius: ${theme.spacing[4]};
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
`

export const SubTitle = styled.p`
  ${theme.typography.label2Regular};
  color: ${theme.colors.semanticColor.textColor.sub};
  margin: ${theme.spacing[0]};
  line-height: 0.5;
`

export const Title = styled.p`
  ${theme.typography.subtitle1Bold};
  color: ${theme.colors.semanticColor.textColor.default};
  margin: ${theme.spacing[0]};
  line-height: 0.5;
`
