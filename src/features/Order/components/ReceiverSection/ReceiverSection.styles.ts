import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  padding: ${theme.spacing[5]};
  background: ${theme.colors.semanticColor.backgroundColor.default};
  border-radius: ${theme.spacing[2]};
`

export const Title = styled.div`
  ${theme.typography.title1Bold};
  line-height: ${theme.spacing[2]};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const EmptyMessage = styled.div`
  border: 1px solid ${theme.colors.colorScale.gray[400]};
  border-radius: ${theme.spacing[2]};
  color: ${theme.colors.colorScale.gray[600]};
  text-align: center;
  padding: ${theme.spacing[8]};
  margin-top: ${theme.spacing[4]};
  ${theme.typography.label2Regular};
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing[4]} ${theme.spacing[0]};
  padding: ${theme.spacing[0]};
  list-style: none;
  border-radius: ${theme.spacing[2]};
  border: 1px solid ${theme.colors.colorScale.gray[500]};
  overflow: hidden;
`

export const ListHeader = styled.li`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background: ${theme.colors.semanticColor.backgroundColor.default};
  border-bottom: 1px solid ${theme.colors.colorScale.gray[500]};
  ${theme.typography.body1Bold};
`

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-bottom: 1px solid ${theme.colors.colorScale.gray[500]};
  ${theme.typography.body2Regular};
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }
`

export const ErrorText = styled.p`
  text-align: left;
  color: ${theme.colors.semanticColor.stateColor.critical};
  ${theme.typography.label2Regular};
  margin-top: ${theme.spacing[1]};
  margin-bottom: ${theme.spacing[2]};
`
