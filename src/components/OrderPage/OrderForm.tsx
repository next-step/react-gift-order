import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import { cardMock } from '@/pages/OrderPage/cardMock'
import type { Product } from '@/types/product'
import { useState } from 'react'

interface OrderFormProps {
  product: Product
}

interface FormValues {
  sender: string
  receiver: string
  receiverPhone: string
  quantity: number
  message: string
}

export function OrderForm({ product }: OrderFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      sender: '',
      receiver: '',
      receiverPhone: '',
      quantity: 1,
      message: cardMock[0].defaultTextMessage,
    },
  })

  const [selectedCard, setSelectedCard] = useState(cardMock[0])

  const onSubmit = (data: FormValues) => {
    alert(`주문이 완료되었습니다.
      상품명: ${product.name}
      구매 수량: ${data.quantity}
      발신자 이름: ${data.sender}
      메시지: ${data.message}`)
    reset()
    setSelectedCard(cardMock[0])
    setValue('message', cardMock[0].defaultTextMessage)
  }

  const message = watch('message')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardList>
        {cardMock.map((cardItem) => (
          <CardThumbnail
            key={cardItem.id}
            src={cardItem.thumbUrl}
            alt="card"
            onClick={() => {
              setSelectedCard(cardItem)
              setValue('message', cardItem.defaultTextMessage)
            }}
            selected={selectedCard.id === cardItem.id}
          />
        ))}
      </CardList>

      <SelectedCard>
        <img src={selectedCard.imageUrl} alt="selected" />
        <textarea
          {...register('message', {
            required: '메시지를 입력해주세요.',
          })}
          value={message}
          onChange={(e) => setValue('message', e.target.value)}
          placeholder="메시지를 입력해주세요."
        />
        {errors.message && <Error>{errors.message.message}</Error>}
      </SelectedCard>

      <PersonSection>
        <PersonLabel>보내는 사람</PersonLabel>
        <input
          {...register('sender', {
            required: '보내는 사람 이름을 입력해주세요.',
          })}
          placeholder="이름을 입력하세요."
        />
        {errors.sender && <Error>{errors.sender.message}</Error>}
      </PersonSection>

      <PersonSection>
        <PersonLabel>받는 사람</PersonLabel>
        <ReceiverSection>
          <FieldLabel>이름</FieldLabel>
          <input
            {...register('receiver', {
              required: '받는 사람 이름을 입력해주세요.',
            })}
            placeholder="이름을 입력하세요."
          />
        </ReceiverSection>
        {errors.receiver && <Error>{errors.receiver.message}</Error>}

        <ReceiverSection>
          <FieldLabel>전화번호</FieldLabel>
          <input
            {...register('receiverPhone', {
              required: '전화번호를 입력해주세요.',
              pattern: {
                value: /^010\d{8}$/,
                message: '올바른 전화번호 형식이 아닙니다.',
              },
            })}
            placeholder="전화번호를 입력하세요."
          />
        </ReceiverSection>
        {errors.receiverPhone && <Error>{errors.receiverPhone.message}</Error>}

        <ReceiverSection>
          <FieldLabel>수량</FieldLabel>
          <input
            type="number"
            min="0"
            {...register('quantity', {
              required: '수량을 입력해주세요.',
              min: { value: 1, message: '수량은 1개 이상이어야 합니다.' },
            })}
          />
        </ReceiverSection>
        {errors.quantity && <Error>{errors.quantity.message}</Error>}
      </PersonSection>

      <ProductInfo>
        <label>상품 정보</label>
        <ProductBox>
          <ProductImage src={product.imageURL} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brandInfo.name}</ProductBrand>
            <ProductPrice>
              {product.price.sellingPrice.toLocaleString()}원
            </ProductPrice>
          </ProductDetails>
        </ProductBox>
      </ProductInfo>

      <OrderButton type="submit">
        {product.price.sellingPrice.toLocaleString()}원 주문하기
      </OrderButton>
    </form>
  )
}

const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin-bottom: 20px;
`

const CardThumbnail = styled.img<{ selected: boolean }>`
  width: 100px;
  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.blue500 : 'transparent'};
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
