import { Button, PageContainer, Typography } from '@/shared/ui'
import type { Product } from '@/features/product/trend/types'
import { productListMock } from '@/entities/product/productListMock'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { OrderCardSection } from '@/features/order/OrderCardSection'
import type { CardData } from '@/features/order/types'
import { orderCardMock } from '@/entities/order/orderCardMock'
import { SenderSection } from '@/features/order/SenderSection'
import { ReceiverSection } from '@/features/order/ReceiverSection'
import { ROUTE_PATH } from '@/app/Router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { orderFormSchema, type OrderFormData } from '@/features/order/schema'

// * 주문하기 페이지
export const Order = () => {
  const navigate = useNavigate()
  // * URL 파라미터로 부터 상품 id 값 가져오기
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<Product>()

  // * 카드 리스트
  const cardList: CardData[] = orderCardMock

  // * React Hook Form 설정
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      cardMessage: orderCardMock[0].defaultTextMessage,
      sender: '',
      receiver: {
        name: '',
        phone: '',
        count: 1,
      },
      selectedCard: orderCardMock[0],
    },
  })

  // * 폼 데이터 실시간 추적
  const watchedData = watch()
  const { selectedCard, receiver } = watchedData

  // * 상품 데이터 id 를 통한 필터링
  useEffect(() => {
    const newProductInfo = productListMock.find((product) => product.id === Number(id))
    if (newProductInfo) setProductInfo(newProductInfo)
  }, [id])

  // * 카드 선택 핸들러
  const handleCardSelect = (card: CardData) => {
    setValue('selectedCard', card)
    setValue('cardMessage', card.defaultTextMessage) // * 선택된 카드의 기본 메시지로 업데이트
  }

  // * 폼 제출 핸들러
  const onSubmit = (data: OrderFormData) => {
    // * 유효성 검사가 자동으로 통과된 데이터
    alert(
      `주문이 완료되었습니다!\n상품명: ${productInfo?.name}\n구매 수량: ${data.receiver.count}\n상품가: ${totalPrice.toLocaleString()}원\n보낸 사람 명: ${data.sender}\n받는 사람 명: ${data.receiver.name}\n메시지: ${data.cardMessage}`,
    )
    navigate(ROUTE_PATH.HOME)
  }

  // * 주문 총액 계산
  const totalPrice = productInfo ? productInfo.price.sellingPrice * receiver.count : 0

  // * 상품 정보가 없을 경우 NotFound 페이지로 이동하도록 처리
  if (!productInfo) return <NotFound />

  // * 상품 정보가 있을 경우
  return (
    <OrderContainer>
      {/* 주문하기 카드 섹션 */}
      <OrderCardSection
        cardList={cardList}
        selectedCard={selectedCard}
        control={control}
        onCardSelect={handleCardSelect}
        messageError={errors.cardMessage?.message}
      />

      {/* 보내는 사람 폼 섹션 */}
      <SenderSection control={control} error={errors.sender?.message} />

      {/* 받는 사람 폼 섹션 */}
      <ReceiverSection
        control={control}
        errors={{
          name: errors.receiver?.name?.message,
          phone: errors.receiver?.phone?.message,
          count: errors.receiver?.count?.message,
        }}
      />

      {/* 상품 정보 섹션 */}
      <ProductInfoSection>
        <SectionTitle variant="title2Bold">상품 정보</SectionTitle>
        <ProductInfo>
          <ProductImage src={productInfo.imageURL} alt={productInfo.name} />
          <ProductDetails>
            <ProductNameContainer>
              <ProductName variant="subtitle2Regular">{productInfo.name}</ProductName>
              <ProductBrand variant="label2Regular">{productInfo.brandInfo.name}</ProductBrand>
            </ProductNameContainer>
            <ProductPriceContainer>
              <ProductPriceLabel
                variant="label2Regular"
                css={{
                  color: theme.semanticColors.text.sub,
                  fontSize: '0.875rem',
                  fontWeight: '400',
                  marginRight: theme.spacing.spacing1,
                }}
              >
                상품가
              </ProductPriceLabel>
              {/* 할인되는 경우만 할인율 & 원래 가격(중간 줄) 추가 표시 */}
              {productInfo.price.discountRate > 0 && (
                <>
                  <ProductDiscountRate variant="title2Bold">
                    {productInfo.price.discountRate}%
                  </ProductDiscountRate>
                  <ProductBasicPrice variant="title2Bold" css={{ textDecoration: 'line-through' }}>
                    {productInfo.price.basicPrice.toLocaleString()}원
                  </ProductBasicPrice>
                </>
              )}
              <ProductSellingPrice variant="title2Bold">
                {productInfo.price.sellingPrice.toLocaleString()}원
              </ProductSellingPrice>
            </ProductPriceContainer>
          </ProductDetails>
        </ProductInfo>
      </ProductInfoSection>

      {/* 주문하기 버튼 */}
      <OrderButtonSection>
        <OrderButton variant="kakao" size="large" onClick={handleSubmit(onSubmit)}>
          {totalPrice.toLocaleString()}원 주문하기
        </OrderButton>
      </OrderButtonSection>
    </OrderContainer>
  )
}

// * 주문하기 페이지 컨테이너
const OrderContainer = styled(PageContainer)`
  justify-content: start;
  background-color: ${theme.semanticColors.background.disabled};
  gap: ${theme.spacing.spacing2};
`

// * 상품 정보 섹션
const ProductInfoSection = styled.section`
  width: 100%;
  padding: ${theme.spacing.spacing4} ${theme.spacing.spacing4};
  background-color: ${theme.semanticColors.background.default};
  border-bottom: 1px solid ${theme.semanticColors.border.default};

  display: flex;
  flex-direction: column;
`

// * 섹션 제목
const SectionTitle = styled(Typography)`
  margin-bottom: ${theme.spacing.spacing3};
`

// * 상품 정보 컨테이너
const ProductInfo = styled.div`
  padding: ${theme.spacing.spacing4};

  border: 1px solid ${theme.semanticColors.border.disabled};
  border-radius: ${theme.spacing.spacing2};

  display: flex;
  align-items: center;
  gap: ${theme.spacing.spacing3};
`

// * 상품 이미지
const ProductImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: ${theme.spacing.spacing1};
  object-fit: cover;
`

// * 상품 상세 정보
const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing1};
`

// * 상품 명 컨테이너
const ProductNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing1};
`

// * 상품명
const ProductName = styled(Typography)`
  color: ${theme.semanticColors.text.default};
`

// * 상품 브랜드
const ProductBrand = styled(Typography)`
  color: ${theme.semanticColors.text.sub};
`

// * 상품 가격 컨테이너
const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.spacing1};
  flex-wrap: wrap;
`

// * 상품 가격 라벨
const ProductPriceLabel = styled(Typography)``

// * 상품 할인율
const ProductDiscountRate = styled(Typography)`
  color: ${theme.semanticColors.status.info};
`

// * 상품 원래 가격
const ProductBasicPrice = styled(Typography)`
  color: ${theme.semanticColors.text.sub};
`

// * 상품 판매가
const ProductSellingPrice = styled(Typography)`
  color: ${theme.semanticColors.text.default};
`

// * 주문 버튼 섹션
const OrderButtonSection = styled.section`
  width: 100%;
`

// * 주문 버튼
const OrderButton = styled(Button)`
  font-weight: 700;
`
