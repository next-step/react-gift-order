import styled from '@emotion/styled'

interface Product {
  id: number
  name: string
  imageURL: string
  price: {
    basicPrice: number
    discountRate: number
    sellingPrice: number
  }
  brandInfo: {
    id: number
    name: string
    imageURL: string
  }
}

interface Props {
  product: Product
  rank: number
}

export function ProductItem({ product, rank }: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <RankBadge rank={rank}>{rank}</RankBadge>
        <Image src={product.imageURL} alt={product.name} />
      </ImageWrapper>
      <Brand>{product.brandInfo.name}</Brand>
      <Name>{product.brandInfo.name}</Name>
      <Price>{product.price.sellingPrice.toLocaleString()}원</Price>
    </Wrapper>
  )
}

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
