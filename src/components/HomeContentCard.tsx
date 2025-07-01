
import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const Card = styled.section`
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing.spacing5};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing6};
`

export const HomeContentCard = ({ children }: { children: ReactNode }) => {
  return <Card>{children}</Card>
}
