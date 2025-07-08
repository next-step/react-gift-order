import styled from '@emotion/styled'
import { Navbar } from '@/components/Navbar/Navbar'
import { cardMock } from '@/pages/OrderPage/cardMock'
import { Layout } from '@/components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { productMock } from '@/components/Product/productMock'
import { useOrderForm } from '@/hooks/useOrderForm'
import { useMemo } from 'react'

export function OrderPage() {
  const { id } = useParams<{ id: string }>()
  const product = useMemo(
    () => productMock.find((p) => p.id === Number(id)),
    [id]
  )

  const {
    sender,
    receiver,
    receiverPhone,
    quantity,
    card,
    isSubmitted,
    setIsSubmitted,
    isFormValid,
    resetForm,
  } = useOrderForm()

  if (!product) return <div>상품을 찾을 수 없습니다.</div>

  const price = product.price.sellingPrice
  const productName = product.name
  const brandName = product.brandInfo.name

  const submitOrderForm = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    if (isFormValid) {
      alert(`주문이 완료되었습니다.
        상품명: ${productName}
        구매 수량: ${quantity.value}
        발신자 이름: ${sender.value}
        메시지: ${card.message}`)
      resetForm()
    }
  }

  return (
    <>
      <Navbar />
      <Layout>
        <Container>
          <form onSubmit={submitOrderForm}>
            <CardList>
              {cardMock.map((cardItem) => (
                <CardThumbnail
                  key={cardItem.id}
                  src={cardItem.thumbUrl}
                  alt="card"
                  onClick={() => {
                    card.setSelectedCard(cardItem)
                    card.setMessage(cardItem.defaultTextMessage)
                  }}
                  isSelected={card.selectedCard.id === cardItem.id}
                />
              ))}
            </CardList>

            <SelectedCard>
              <img src={card.selectedCard.imageUrl} alt="selected" />
              <textarea
                value={card.message}
                onChange={(e) => card.setMessage(e.target.value)}
                placeholder="메시지를 입력해주세요."
              />
              {isSubmitted && card.error && <Error>{card.error}</Error>}
            </SelectedCard>

            <PersonSection>
              <PersonLabel>보내는 사람</PersonLabel>
              <input
                value={sender.value}
                onChange={(e) => sender.set(e.target.value)}
                placeholder="이름을 입력하세요."
              />
              {isSubmitted && sender.error && <Error>{sender.error}</Error>}
            </PersonSection>

            <PersonSection>
              <PersonLabel>받는 사람</PersonLabel>
              <ReceiverSection>
                <FieldLabel>이름</FieldLabel>
                <input
                  value={receiver.value}
                  onChange={(e) => receiver.set(e.target.value)}
                  placeholder="이름을 입력하세요."
                />
              </ReceiverSection>
              {isSubmitted && receiver.error && <Error>{receiver.error}</Error>}

              <ReceiverSection>
                <FieldLabel>전화번호</FieldLabel>
                <input
                  value={receiverPhone.value}
                  onChange={(e) => receiverPhone.set(e.target.value)}
                  placeholder="전화번호를 입력하세요."
                />
              </ReceiverSection>
              {isSubmitted && receiverPhone.error && (
                <Error>{receiverPhone.error}</Error>
              )}

              <ReceiverSection>
                <FieldLabel>수량</FieldLabel>
                <input
                  type="number"
                  min="1"
                  value={quantity.value}
                  onChange={(e) => quantity.set(Number(e.target.value))}
                />
              </ReceiverSection>
              {isSubmitted && quantity.error && <Error>{quantity.error}</Error>}
            </PersonSection>

            <ProductInfo>
              <label>상품 정보</label>
              <ProductBox>
                <ProductImage
                  src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
                  alt="상품 이미지"
                />
                <ProductDetails>
                  <ProductName>{productName}</ProductName>
                  <ProductBrand>{brandName}</ProductBrand>
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
