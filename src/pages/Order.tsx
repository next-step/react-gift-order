import { PageContainer } from '@/components/common'
import type { Product } from '@/components/home/Trend/types'
import { productListMock } from '@/data/productListMock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { OrderCardSection } from '@/components/order/OrderCardSection'

// * 주문하기 페이지
export const Order = () => {
  // * URL 파라미터로 부터 상품 id 값 가져오기
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<Product>()

  // * 상품 데이터 id 를 통한 필터링
  useEffect(() => {
    const newProductInfo = productListMock.find((product) => product.id === Number(id))
    if (newProductInfo) setProductInfo(newProductInfo)
  }, [id])

  // * 상품 정보가 없을 경우 NotFound 페이지로 이동하도록 처리
  if (!productInfo) return <NotFound />

  // * 상품 정보가 있을 경우
  return (
    <OrderContainer>
      {/* 주문하기 카드 섹션 */}
      <OrderCardSection />
      {/* 보내는 사람 폼 섹션 */}
      {/* <SenderForm /> */}
      {/* 받는 사람 폼 섹션 */}
      {/* <RecieverForm /> */}
      {/* 상품 정보 섹션 */}
      {/* <ProductInfo /> */}
      {/* 주문하기 버튼 */}
      {/* <OrderButton /> */}
    </OrderContainer>
  )
}

// * 주문하기 페이지 컨테이너
const OrderContainer = styled(PageContainer)`
  justify-content: start;
  background-color: ${theme.semanticColors.background.disabled};
`
