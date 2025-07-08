import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import Layout from '@/Layout'
import { cardTemplates, type CardTemplate } from '@/data/cardTemplates'
import type { Product } from '@/type'
import useOrderForm from '@/hooks/useOrderForm'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/spacing'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing6};
  padding: ${spacing.spacing6} 0;
  color: ${colors.text.default};
`

const CardGrid = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: ${spacing.spacing2};
  overflow-x: auto;
  padding-bottom: ${spacing.spacing2};
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.border.default};
    border-radius: 3px;
  }
`

const CardItem = styled.div<{ selected: boolean }>`
  flex: 0 0 auto;
  width: 80px;
  cursor: pointer;
  border: 2px solid
    ${({ selected }) =>
      selected ? colors.brand.kakaoYellow : 'transparent'};
  border-radius: 4px;
  overflow: hidden;
`

const Thumb = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const Preview = styled.section`
  img {
    width: 100%;
    border-radius: 4px;
  }
`
const ErrorMessage = styled.p`
  margin: 0 0 ${spacing.spacing2};
  color: ${colors.status.critical};
  font-size: ${typography.body2Regular.fontSize};
  line-height: ${typography.body2Regular.lineHeight};
`

const MessageInput = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: ${spacing.spacing2};
  border: 1px solid ${colors.border.default};
  border-radius: 4px;
  resize: vertical;
  font-size: ${typography.body1Regular.fontSize};
`

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing2};
`

const Label = styled.label`
  font-size: ${typography.label1Bold.fontSize};
  font-weight: ${typography.label1Bold.fontWeight};
`

const Input = styled.input`
  padding: ${spacing.spacing2};
  border: 1px solid ${colors.border.default};
  border-radius: 4px;
  font-size: ${typography.body1Regular.fontSize};
`

const ProductInfo = styled.section`
  display: flex;
  gap: ${spacing.spacing4};
  align-items: center;
`

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
 border-radius: 4px;
`

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacing1};
`

const ProductName = styled.p`
  font-size: ${typography.subtitle2Bold.fontSize};
  font-weight: ${typography.subtitle2Bold.fontWeight};
  line-height: ${typography.subtitle2Bold.lineHeight};
`

const Brand = styled.p`
  color: ${colors.text.sub};
  font-size: ${typography.label2Regular.fontSize};
  line-height: ${typography.label2Regular.lineHeight};
`

const Price = styled.p`
  font-size: ${typography.body1Bold.fontSize};
  font-weight: ${typography.body1Bold.fontWeight};
`

const OrderButton = styled.button`
  padding: ${spacing.spacing3};
  background-color: ${colors.brand.kakaoYellow};
  border: none;
  border-radius: 4px;
  font-size: ${typography.subtitle1Bold.fontSize};
  font-weight: ${typography.subtitle1Bold.fontWeight};
  cursor: pointer;
  &:hover {
    background-color: ${colors.brand.kakaoYellowHover};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export default function OrderPage() {
  const location = useLocation()
  const product = (location.state as { product?: Product })?.product

  const [selected, setSelected] = useState<CardTemplate>(cardTemplates[0])
  const {
    message,
    setMessage,
    sender,
    setSender,
    receiver,
    setReceiver,
    messageError,
    senderError,
    receiverNameError,
    receiverPhoneError,
    qtyError,
    handleMessageBlur,
    handleSenderBlur,
    handleReceiverNameBlur,
    handleReceiverPhoneBlur,
    handleQtyBlur,
    isValid,
  } = useOrderForm(cardTemplates[0].defaultTextMessage)

  const handleCardSelect = (card: CardTemplate) => {
    setSelected(card)
    setMessage(card.defaultTextMessage)
  }

  const handleOrder = () => {
    alert(
      `주문 완료:\n카드: ${selected.id}\n메시지: ${message}\n보낸 사람: ${sender}\n받는 사람: ${receiver.name}, ${receiver.phone}, 수량: ${receiver.qty}`,
    )
  }
  return (
    <Layout>
      <Container>
<CardGrid>
          {cardTemplates.map((card) => (
            <CardItem
              key={card.id}
              selected={selected.id === card.id}
              onClick={() => handleCardSelect(card)}
            >
              <Thumb src={card.thumbUrl} alt="카드 썸네일" />
            </CardItem>
          ))}
        </CardGrid>

        <Preview>
          <img src={selected.imageUrl} alt="선택된 카드" />
        </Preview>

        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleMessageBlur}
          placeholder="메시지를 입력해주세요."
          maxLength={200}
        />
        {messageError && <ErrorMessage>{messageError}</ErrorMessage>}

        <InfoSection>
          <Label>보내는 사람</Label>
          <Input
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            onBlur={handleSenderBlur}
            placeholder="이름을 입력하세요."
          />
          {senderError && <ErrorMessage>{senderError}</ErrorMessage>}
          *실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.
        </InfoSection>

        <InfoSection>
          <Label>받는 사람</Label>
          <Input
            type="text"
            value={receiver.name}
            onChange={(e) =>
              setReceiver((prev) => ({ ...prev, name: e.target.value }))
            }
            onBlur={handleReceiverNameBlur}
            placeholder="이름을 입력하세요."
          />
          {receiverNameError && (
            <ErrorMessage>{receiverNameError}</ErrorMessage>
          )}
          <Input
            type="tel"
            value={receiver.phone}
            onChange={(e) =>
              setReceiver((prev) => ({ ...prev, phone: e.target.value }))
            }
            onBlur={handleReceiverPhoneBlur}
            placeholder="전화번호를 입력하세요."
          />
          {receiverPhoneError && (
            <ErrorMessage>{receiverPhoneError}</ErrorMessage>
          )}
          <Input
            type="number"
            min="1"
            value={receiver.qty}
            onChange={(e) =>
              setReceiver((prev) => ({ ...prev, qty: Number(e.target.value) }))
            }
            onBlur={handleQtyBlur}
            placeholder="수량"
          />
           {qtyError && <ErrorMessage>{qtyError}</ErrorMessage>}
        </InfoSection>

        {product && (
          <ProductInfo>
            <ProductImage src={product.imageURL} alt="상품 이미지" />
            <Details>
              <ProductName>{product.name}</ProductName>
              <Brand>{product.brandInfo.name}</Brand>
              <Price>
                <span>상품가 </span>
                {product.price.sellingPrice.toLocaleString()}원
              </Price>
            </Details>
          </ProductInfo>
        )}

        <OrderButton onClick={handleOrder} disabled={!isValid}>
          {product
            ? `${product.price.sellingPrice.toLocaleString()}원 주문하기`
            : '주문하기'}
        </OrderButton>      </Container>
    </Layout>
  )
}