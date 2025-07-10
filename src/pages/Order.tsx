import { Button, PageContainer, Typography } from '@/shared/ui'
import type { Product } from '@/features/product/trend/types'
import { productListMock } from '@/entities/product/productListMock'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { OrderCardSection } from '@/features/order/OrderCardSection'
import type { CardData, ReceiverData } from '@/features/order/types'
import { orderCardMock } from '@/entities/order/orderCardMock'
import { SenderSection } from '@/features/order/SenderSection'
import { ReceiverSection } from '@/features/order/ReceiverSection'
import { validateValue } from '@/shared/lib/validateValue'
import { VALIDATE_RULES } from '@/shared/lib/validateRules'
import { ROUTE_PATH } from '@/app/Router'

// * 주문하기 페이지
export const Order = () => {
  const navigate = useNavigate()
  // * URL 파라미터로 부터 상품 id 값 가져오기
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<Product>()

  // * 카드 섹션 상태
  const cardList: CardData[] = orderCardMock
  const [selectedCard, setSelectedCard] = useState<CardData>(orderCardMock[0])
  const [cardMessage, setCardMessage] = useState(orderCardMock[0].defaultTextMessage)

  // * 보내는 사람 상태
  const [sender, setSender] = useState('')

  // * 받는 사람 상태
  const [receiver, setReceiver] = useState<ReceiverData>({
    name: '',
    phone: '',
    count: 1,
  })

  // * 폼 에러 상태
  const [formErrors, setFormErrors] = useState({
    cardMessage: null as string | null,
    sender: null as string | null,
    receiver: {
      name: null as string | null,
      phone: null as string | null,
      count: null as string | null,
    },
  })

  // * 상품 데이터 id 를 통한 필터링
  useEffect(() => {
    const newProductInfo = productListMock.find((product) => product.id === Number(id))
    if (newProductInfo) setProductInfo(newProductInfo)
  }, [id])

  // * 카드 선택 핸들러
  const handleCardSelect = (card: CardData) => {
    setSelectedCard(card)
    setCardMessage(card.defaultTextMessage) // * 선택된 카드의 기본 메시지로 업데이트
  }

  // * 메시지 변경 핸들러
  const handleMessageChange = (message: string) => {
    setCardMessage(message)
    // * 에러가 있었다면 지우기
    if (formErrors.cardMessage) {
      setFormErrors((prev) => ({ ...prev, cardMessage: null }))
    }
  }

  // * 보내는 사람 변경 핸들러
  const handleSenderChange = (newSender: string) => {
    setSender(newSender)
    // * 에러가 있었다면 지우기
    if (formErrors.sender) {
      setFormErrors((prev) => ({ ...prev, sender: null }))
    }
  }

  // * 받는 사람 변경 핸들러
  const handleReceiverChange = (newReceiver: ReceiverData) => {
    setReceiver(newReceiver)
    // * 에러가 있었다면 지우기
    const hasReceiverErrors =
      formErrors.receiver.name || formErrors.receiver.phone || formErrors.receiver.count
    if (hasReceiverErrors) {
      setFormErrors((prev) => ({
        ...prev,
        receiver: {
          name: null,
          phone: null,
          count: null,
        },
      }))
    }
  }

  // * 폼 유효성 검사
  const validateForm = () => {
    const errors = {
      cardMessage: validateValue(cardMessage, VALIDATE_RULES.message),
      sender: validateValue(sender, VALIDATE_RULES.name),
      receiver: {
        name: validateValue(receiver.name, VALIDATE_RULES.name),
        phone: validateValue(receiver.phone, VALIDATE_RULES.phone),
        count: validateValue(receiver.count.toString(), VALIDATE_RULES.quantity),
      },
    }

    setFormErrors(errors)

    // * 모든 에러가 null인지 확인
    return (
      !errors.cardMessage &&
      !errors.sender &&
      !errors.receiver.name &&
      !errors.receiver.phone &&
      !errors.receiver.count
    )
  }

  // * 주문하기 버튼 클릭 핸들러
  const handleOrderSubmit = () => {
    if (validateForm()) {
      // * 유효성 검사 통과 시 주문 처리 로직
      alert(
        `주문이 완료되었습니다!\n상품명: ${productInfo?.name}\n구매 수량: ${receiver.count}\n상품가: ${totalPrice.toLocaleString()}원\n보낸 사람 명: ${sender}\n받는 사람 명: ${receiver.name}\n메시지: ${cardMessage}`,
      )
      navigate(ROUTE_PATH.HOME)
    }
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
        cardMessage={cardMessage}
        onCardSelect={handleCardSelect}
        onMessageChange={handleMessageChange}
        messageError={formErrors.cardMessage}
      />

      {/* 보내는 사람 폼 섹션 */}
      <SenderSection
        sender={sender}
        onSenderChange={handleSenderChange}
        error={formErrors.sender}
      />

      {/* 받는 사람 폼 섹션 */}
      <ReceiverSection
        receiver={receiver}
        onReceiverChange={handleReceiverChange}
        errors={formErrors.receiver}
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
        <OrderButton variant="kakao" size="large" onClick={handleOrderSubmit}>
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
