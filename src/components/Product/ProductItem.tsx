import styled from '@emotion/styled'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import type { Product } from '@/types/product'

export const ProductItem = memo(function ProductItem({
  id,
  imageURL,
  name,
  price,
  brandInfo,
  rank,
}: Product) {
  const navigate = useNavigate()
  const { user } = useAuth()

  const goOrderPage = () => {
    if (user) {
      navigate(`/order/${id}`)
    } else {
      navigate('/login', { state: { from: `/order/${id}` } })
    }
  }

  return (
    <Wrapper onClick={goOrderPage}>
      <ImageWrapper>
        <RankBadge rank={rank}>{rank}</RankBadge>
        <Image src={imageURL} alt={name} />
      </ImageWrapper>
      <Brand>{brandInfo.name}</Brand>
      <Name>{name}</Name>
      <Price>{price.sellingPrice.toLocaleString()}원</Price>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`

const RankBadge = styled.div<{ rank: number }>`
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: ${({ rank, theme }) =>
    rank <= 3 ? theme.colors.red600 : theme.colors.gray500};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 12px;
`

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
`

const Brand = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSub};
`

const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDefault};
`
