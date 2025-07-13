import styled from '@emotion/styled'
import type { Product } from '@/types/product'

export function ProductInfo({ product }: { product: Product }) {
  return (
    <Wrapper>
      <label>상품 정보</label>
      <Box>
        <ProductImage src={product.imageURL} alt={product.name} />
        <Details>
          <ProductName>{product.name}</ProductName>
          <ProductBrand>{product.brandInfo.name}</ProductBrand>
          <ProductPrice>
            {product.price.sellingPrice.toLocaleString()}원
          </ProductPrice>
        </Details>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 34px;
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 8px;
  margin-top: 8px;
`

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ProductName = styled.div`
  font-size: 14px;
  font-weight: 600;
`

const ProductBrand = styled.div`
  font-size: 12px;
  color: #666;
`

const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDefault};
`
