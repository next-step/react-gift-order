import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Icon = styled.div`
  width: ${theme.spacing[7]};
  height: ${theme.spacing[7]};
  cursor: pointer;
`
export const Nav = styled.nav`
  display: flex;
  top: ${theme.spacing[0]};
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 100;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background-color: ${theme.colors.colorScale.gray[0]};
  ${theme.typography.title1Bold};
`
