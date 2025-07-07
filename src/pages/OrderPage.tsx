import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import Layout from '@/Layout'
import type { Product } from '@/type'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.spacing6};
  color: ${colors.text.default};
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: ${spacing.spacing4};
`

const Title = styled.h1`
  font-size: ${typography.title2Bold.fontSize};
  font-weight: ${typography.title2Bold.fontWeight};
  margin-bottom: ${spacing.spacing6};
`

export default function OrderPage() {
  const location = useLocation()
  return (
    <Layout>
      <Container>
        {/* TODO: 주문 폼 구현 예정 */}
      </Container>
    </Layout>
  )
}