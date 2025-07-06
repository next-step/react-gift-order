import { PageContainer, Typography } from '@/components/common'
import type { Product } from '@/components/home/Trend/types'
import { productListMock } from '@/data/productListMock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import styled from '@emotion/styled'

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
      <Typography variant="title1Bold">주문하기</Typography>
      <Typography variant="subtitle1Regular">
        No{productInfo.id}. {productInfo.name}
      </Typography>
    </OrderContainer>
  )
}

// * 주문하기 페이지 컨테이너
const OrderContainer = styled(PageContainer)`
  justify-content: start;
`
