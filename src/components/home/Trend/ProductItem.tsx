import { theme } from '@/styles/theme'
import { typographyMixin } from '@/components/common'
import styled from '@emotion/styled'
import type { Product } from './types'

// * 실시간 급상승 상품 아이템 컴포넌트
export const ProductItem = ({ product, index }: { product: Product; index: number }) => {
  return (
    <ProductItemContainer>
      <ProductRank rank={index + 1}>{index + 1}</ProductRank>
      <ProductImage src={product.imageURL} alt={product.name} />
      <ProductTitleContainer>
        <ProductBrand>{product.brandInfo.name}</ProductBrand>
        <ProductName>{product.name}</ProductName>
      </ProductTitleContainer>
      <ProductPrice>
        {/* 할인되는 경우만 할인율 & 원래 가격(중간 줄) 추가 표시 */}
        {product.price.discountRate > 0 && (
          <>
            <ProductDiscountRate>{product.price.discountRate}%</ProductDiscountRate>
            <ProductBasicPrice style={{ textDecoration: 'line-through' }}>
              {product.price.basicPrice}
            </ProductBasicPrice>
          </>
        )}
        <ProductSellingPrice>
          <span css={theme.typography.body.body1Bold}>{product.price.sellingPrice}</span> 원
        </ProductSellingPrice>
      </ProductPrice>
    </ProductItemContainer>
  )
}

// * 실시간 급상승 상품 아이템 컨테이너
const ProductItemContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing2};
`

// * 실시간 급상승 상품 랭크
const ProductRank = styled.span<{ rank: number }>`
  position: absolute;
  top: ${theme.spacing.spacing1};
  left: ${theme.spacing.spacing1};

  width: 20px;
  height: 20px;

  ${({ rank }) => {
    if (rank <= 3) {
      return `
        background-color: ${theme.colors.red.red600};
        color: ${theme.colors.red.red00};
      `
    } else {
      return `
        background-color: ${theme.colors.gray.gray600};
        color: ${theme.colors.gray.gray00};
      `
    }
  }}

  border-radius: ${theme.spacing.spacing1};

  ${typographyMixin('label2Bold')}

  display: flex;
  align-items: center;
  justify-content: center;
`

// * 실시간 급상승 상품 이미지
const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;

  object-fit: cover;
  border-radius: ${theme.spacing.spacing1};
`

// * 실시간 급상승 브랜드 & 이름 컨테이너
const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing0};

  ${typographyMixin('label1Regular')}
`

// * 실시간 급상승 상품 브랜드
const ProductBrand = styled.span`
  /* 보조 텍스트 색상 */
  color: ${theme.semanticColors.text.sub};
`

// * 실시간 급상승 상품 이름
const ProductName = styled.span``

// * 실시간 급상승 상품 가격 컨테이너
const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing1};

  ${typographyMixin('body1Regular')}

  /* 화면 축소 시 원치 않는 찌그러짐 방지 */
  flex-wrap: wrap;
`

// * 실시간 급상승 상품 할인율
const ProductDiscountRate = styled.span`
  /* 할인 - 정보 색상 */
  color: ${theme.semanticColors.status.info};
`

// * 실시간 급상승 상품 원래 가격
const ProductBasicPrice = styled.span``

// * 실시간 급상승 상품 판매가
const ProductSellingPrice = styled.span``
