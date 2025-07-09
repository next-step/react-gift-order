import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from '@emotion/styled'
import { MOCK_RANKING_PRODUCT_DATA_LIST } from './mock'
import { RankingProductListItem } from '@/components/ProductListItem/Ranking'
import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing'
import { Typography } from '@/components/common/Typography'

export const ProductRankingList = () => {
  const [isMore, setIsMore] = useState(false)
  const navigate = useNavigate()

  const currentProductList = isMore
    ? MOCK_RANKING_PRODUCT_DATA_LIST
    : MOCK_RANKING_PRODUCT_DATA_LIST.slice(0, 6)

  return (
    <Wrapper>
      <List>
        {currentProductList.map((product, index) => (
          <ItemWrapper
            key={product.id}
            onClick={() => navigate(`/order/${product.id}`)}
          >
            <RankingProductListItem
              rankingIndex={index + 1}
              imageSrc={product.imageURL}
              title={product.name}
              subtitle={product.brandInfo.name}
              amount={product.price.sellingPrice}
            />
          </ItemWrapper>
        ))}
      </List>

      <HorizontalSpacing size="spacing8" />

      <ButtonWrapper>
        <Button onClick={() => setIsMore(!isMore)}>
          <Typography
            variant="label1Regular"
            color="default"
            width="100%"
            textAlign="center"
          >
            {isMore ? '접기' : '더보기'}
          </Typography>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

const ItemWrapper = styled.div`
  cursor: pointer;
`

const Wrapper = styled.div`
  width: 100%;
`

const List = styled.div(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: `${theme.spacing.spacing6} ${theme.spacing.spacing2}`,
}))

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Button = styled.button(({ theme }) => ({
  maxWidth: '30rem',
  width: '100%',
  padding: theme.spacing.spacing3,
  borderRadius: '4px',
  border: `1px solid ${theme.colors.scale.gray400}`,
  backgroundColor: theme.colors.scale.gray00,
}))
