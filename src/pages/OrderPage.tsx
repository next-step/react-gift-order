import { useParams } from 'react-router-dom'
import Layout from '@/components/Layout'
import RecipientOverlay from '@/components/RecipientOverlay'
import { useState } from 'react'
import CardData from '@/data/CardData'
import { mockProductList } from '@/data/products'
import type { Recipient } from '@/components/RecipientOverlay'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/Root'
import { useEffect, useRef } from 'react'
import {
  Container,
  Section,
  CardScroll,
  CardThumb,
  CardPreview,
  MessageInput,
  Label,
  InfoText,
  Input,
  ProductInfo,
  ProductDetails,
  Brand,
  Price,
  OrderBar,
  OrderPrice,
  ErrorText,
  RecipientTable,
} from '@/styles/OrderPage.styled'

export const OrderPage = () => {
  const didNavigate = useRef(false)
  const { productId } = useParams()
  const navigate = useNavigate()
  const product =
    mockProductList.find((item) => item.id === Number(productId)) ||
    mockProductList[0]
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState(CardData[0]?.id || null)
  const selectedCard = CardData.find((card) => card.id === selectedCardId)

  const [message, setMessage] = useState(selectedCard?.defaultTextMessage || '')
  const [senderName, setSenderName] = useState('')
  const [recipients, setRecipients] = useState<Recipient[]>([])
  const [recipientOverlayOpen, setRecipientOverlayOpen] = useState(false)

  const [formErrors, setFormErrors] = useState({
    message: '',
    senderName: '',
    recipients: '',
  })

  const handleOrder = () => {
    const errors = {
      message: '',
      senderName: '',
      recipients: '',
    }

    if (!message.trim()) {
      errors.message = '메시지를 입력해주세요.'
    }
    if (!senderName.trim()) {
      errors.senderName = '보내는 사람 이름을 입력해주세요.'
    }
    if (recipients.length === 0) {
      errors.recipients = '받는 사람을 한 명 이상 추가해주세요.'
    }

    setFormErrors(errors)

    const hasErrors = Object.values(errors).some((e) => e)
    if (hasErrors) return

    alert(
      `주문이 완료되었습니다.
      상품명: ${product?.name || ''}
      구매 수량: ${totalQuantity}
      발신자 이름: ${senderName}
      메시지: ${message}`
    )
    setOrderCompleted(true)
    if (!didNavigate.current) {
      navigate(PATHS.HOME)
      didNavigate.current = true
    }
  }
  useEffect(() => {
    if (orderCompleted && !didNavigate.current) {
      const timer = setTimeout(() => {
        navigate(PATHS.HOME)
        didNavigate.current = true
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [orderCompleted, navigate])

  const totalQuantity = recipients.reduce((sum, r) => sum + r.quantity, 0)
  const totalPrice =
    product?.price?.sellingPrice && totalQuantity
      ? product.price.sellingPrice * totalQuantity
      : 0

  return (
    <Layout>
      <Container>
        <CardScroll>
          {CardData.map((card) => (
            <CardThumb
              key={card.id}
              selected={card.id === selectedCardId}
              onClick={() => {
                setSelectedCardId(card.id)
                setMessage(card.defaultTextMessage || '')
              }}
            >
              <img src={card.thumbUrl} alt={card.defaultTextMessage} />
            </CardThumb>
          ))}
        </CardScroll>

        <CardPreview>
          <img
            src={selectedCard?.imageUrl}
            alt={selectedCard?.defaultTextMessage}
          />
        </CardPreview>

        <Section>
          <MessageInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {formErrors.message && <ErrorText>{formErrors.message}</ErrorText>}
        </Section>

        <Section>
          <Label>보내는 사람</Label>
          <Input
            placeholder="이름을 입력하세요."
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
          {formErrors.senderName && (
            <ErrorText>{formErrors.senderName}</ErrorText>
          )}
          <InfoText>* 실제 선물 발송 시 발신자 이름으로 반영됩니다.</InfoText>
        </Section>

        <Section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem',
            }}
          >
            <Label style={{ margin: 0 }}>받는 사람</Label>
            <button
              type="button"
              onClick={() => setRecipientOverlayOpen(true)}
              style={{
                border: '1px solid #ddd',
                background: '#f5f5f5',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              수정
            </button>
          </div>

          {recipients.length === 0 ? (
            <div
              style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                padding: '40px 0',
                textAlign: 'center',
                color: '#aaa',
                fontSize: '0.9rem',
                maxHeight: '150px',
              }}
            >
              받는 사람이 없습니다.
              <br />
              받는 사람을 추가해주세요.
            </div>
          ) : (
            <RecipientTable>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>전화번호</th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                {recipients.map((r, i) => (
                  <tr key={i}>
                    <td>{r.name}</td>
                    <td>{r.phone}</td>
                    <td>{r.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </RecipientTable>
          )}

          {formErrors.recipients && (
            <ErrorText>{formErrors.recipients}</ErrorText>
          )}
        </Section>

        <Section>
          <Label>상품 정보</Label>
          <ProductInfo>
            {product?.imageURL ? (
              <img
                src={product.imageURL}
                alt={product.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: '#eee',
                }}
              />
            )}

            <ProductDetails>
              <div style={{ fontWeight: 600 }}>{product?.name || ''}</div>
              <Brand>{product?.brandInfo?.name || ''}</Brand>
              <Price>
                <span
                  style={{
                    fontSize: '0.9rem',
                    color: '#888',
                    fontWeight: 'normal',
                  }}
                >
                  상품가{' '}
                </span>
                {product?.price?.sellingPrice?.toLocaleString() || 0}원
              </Price>
            </ProductDetails>
          </ProductInfo>
        </Section>
      </Container>

      <OrderBar onClick={handleOrder}>
        <OrderPrice>{totalPrice.toLocaleString()}원 주문하기</OrderPrice>
      </OrderBar>

      {recipientOverlayOpen && (
        <RecipientOverlay
          defaultRecipients={recipients}
          onComplete={(list, shouldClose) => {
            setRecipients(list)
            if (shouldClose) {
              setRecipientOverlayOpen(false)
            }
          }}
          onClose={() => setRecipientOverlayOpen(false)}
        />
      )}
    </Layout>
  )
}

export default OrderPage
