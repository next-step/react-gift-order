import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'
import type { Product } from '@/type'

interface RankingItemProps {
  rank: number
  product: Product
}

export default function RankingItem({ rank, product }: RankingItemProps) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/order/${product.id}`, { state: { product } })
  }

  return (
    <Card onClick={handleClick}>
      <Badge rank={rank}>{rank}</Badge>
      <Image src={product.imageURL} alt={product.name} />
      <Brand>{product.brandInfo.name}</Brand>
      <Title>{product.name}</Title>
      <Price>
        {product.price.sellingPrice.toLocaleString()} <span>원</span>
      </Price>
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  background: ${colors.background.default};
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
`

const Badge = styled.div<{ rank: number }>`
  position: absolute;
  top: ${spacing.spacing2};
  left: ${spacing.spacing2};
  background: ${({ rank }) => (rank <= 3 ? colors.red[700] : colors.gray[800])};
  color: ${({ rank }) => (rank <= 3 ? colors.gray[0] : colors.gray[100])};
  font-size: ${typography.label2Bold.fontSize};
  font-weight: ${typography.label2Bold.fontWeight};
  line-height: ${typography.label2Bold.lineHeight};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

const Brand = styled.p`
  margin: ${spacing.spacing2} 0 ${spacing.spacing1};
  line-height: ${typography.label2Regular.lineHeight};
  color: ${colors.text.sub};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Title = styled.h6`
  margin: 0;
  font-size: ${typography.subtitle2Bold.fontSize};
  font-weight: ${typography.subtitle2Bold.fontWeight};
  line-height: ${typography.subtitle2Bold.lineHeight};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Price = styled.p`
  margin: ${spacing.spacing1} 0 ${spacing.spacing3};
  font-size: ${typography.body1Bold.fontSize};
  font-weight: ${typography.body1Bold.fontWeight};
  line-height: ${typography.body1Bold.lineHeight};
  color: ${colors.text.default};
`
