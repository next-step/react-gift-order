import styled from '@emotion/styled'
import { useState, useMemo } from 'react'
import { Navbar } from '@/components/Navbar/Navbar'
import { cardMock } from '@/pages/OrderPage/cardMock'
import { Layout } from '@/components/Layout/Layout'

export function OrderPage() {
  const [selectedCard, setSelectedCard] = useState(cardMock[0])
  const [message, setMessage] = useState(selectedCard.defaultTextMessage)
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const price = 29000

  const senderError = useMemo(() => {
    if (!sender) return '보내는 사람 이름을 입력해주세요.'
    return ''
  }, [sender])

  const receiverError = useMemo(() => {
    if (!receiver) return '받는 사람 이름을 입력해주세요.'
    return ''
  }, [receiver])

  const phoneRegex = /^010\d{8}$/
  const receiverPhoneError = useMemo(() => {
    if (!receiverPhone) return '받는 사람 전화번호를 입력해주세요.'
    if (!phoneRegex.test(receiverPhone))
      return '올바른 전화번호 형식이 아닙니다.'
    return ''
  }, [receiverPhone])

  const messageError = useMemo(() => {
    if (!message) return '메시지를 입력해주세요.'
    return ''
  }, [message])

  const quantityError = useMemo(() => {
    if (quantity < 1) return '수량은 1개 이상이어야 합니다.'
    return ''
  }, [quantity])

  const isFormValid =
    !senderError &&
    !receiverError &&
    !receiverPhoneError &&
    !messageError &&
    !quantityError

  const submitOrderForm = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    if (isFormValid) {
      alert(`주문이 완료되었습니다.
        상품명: 치킨
        구매 수량: ${quantity}
        발신자 이름: ${sender}
        메시지: ${message}`)

      setSender('')
      setReceiver('')
      setReceiverPhone('')
      setMessage('')
      setQuantity(1)
      setIsSubmitted(false)
    }
  }

  return (
    <>
      <Navbar />
      <Layout>
        <Container>
          <form onSubmit={submitOrderForm}>
            <CardList>
              {cardMock.map((card) => (
                <CardThumbnail
                  key={card.id}
                  src={card.thumbUrl}
                  alt="card"
                  onClick={() => {
                    setSelectedCard(card)
                    setMessage(card.defaultTextMessage)
                  }}
                  isSelected={selectedCard.id === card.id}
                />
              ))}
            </CardList>

            <SelectedCard>
              <img src={selectedCard.imageUrl} alt="selected" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력해주세요."
              />
              {isSubmitted && messageError && <Error>{messageError}</Error>}
            </SelectedCard>

            <PersonSection>
              <PersonLabel>보내는 사람</PersonLabel>
              <input
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="이름을 입력하세요."
              />
              {isSubmitted && senderError && <Error>{senderError}</Error>}
            </PersonSection>

            <PersonSection>
              <PersonLabel>받는 사람</PersonLabel>
              <ReceiverSection>
                <FieldLabel>이름</FieldLabel>
                <input
                  value={receiver}
                  onChange={(e) => setReceiver(e.target.value)}
                  placeholder="이름을 입력하세요."
                />
              </ReceiverSection>
              {isSubmitted && receiverError && <Error>{receiverError}</Error>}

              <ReceiverSection>
                <FieldLabel>전화번호</FieldLabel>
                <input
                  value={receiverPhone}
                  onChange={(e) => setReceiverPhone(e.target.value)}
                  placeholder="전화번호를 입력하세요."
                />
              </ReceiverSection>
              {isSubmitted && receiverPhoneError && (
                <Error>{receiverPhoneError}</Error>
              )}

              <ReceiverSection>
                <FieldLabel>수량</FieldLabel>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </ReceiverSection>
              {isSubmitted && quantityError && <Error>{quantityError}</Error>}
            </PersonSection>

            <ProductInfo>
              <label>상품 정보</label>
              <ProductBox>
                <ProductImage
                  src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
                  alt="상품 이미지"
                />
                <ProductDetails>
                  <ProductName>BBQ 양념치킨+크림치즈볼+콜라1.25L</ProductName>
                  <ProductBrand>브랜드: BBQ</ProductBrand>
                  <ProductPrice>{price.toLocaleString()}원</ProductPrice>
                </ProductDetails>
              </ProductBox>
            </ProductInfo>

            <OrderButton type="submit">
              {price.toLocaleString()}원 주문하기
            </OrderButton>
          </form>
        </Container>
      </Layout>
    </>
  )
}

const Container = styled.div`
  width: 100%;
`

const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin-bottom: 20px;
`

const CardThumbnail = styled.img<{ isSelected: boolean }>`
  width: 100px;
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.blue500 : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`

const SelectedCard = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  textarea {
    width: 100%;
    height: 60px;
    padding: 8px;
    border: 1px solid #ccc;
    resize: none;
  }
`

const PersonSection = styled.div`
  margin-bottom: 16px;

  label {
    margin-bottom: 7px;
    font-weight: 600;
  }

  input {
    flex: 1;
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`

const PersonLabel = styled.label`
  font-weight: 600;
`

const ReceiverSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const FieldLabel = styled.label`
  width: 70px;
  font-weight: 200;
  flex-shrink: 0;
`

const ProductInfo = styled.div`
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
  }
`

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 8px;
`

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`

const ProductDetails = styled.div`
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

const OrderButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
  cursor: pointer;
`

const Error = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: red;
`
