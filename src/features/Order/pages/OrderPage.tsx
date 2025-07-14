import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useOrderForm } from '../hooks/useOrderForm'
import { FormProvider } from 'react-hook-form'

import CardSelect from '../components/CardSelect/CardSelect'
import CardPreview from '../components/CardPreview/CardPreview'
import MessageInput from '../components/MessageInput/MessageInput'
import SenderInput from '../components/SenderInput/SenderInput'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import BottomPurchaseBar from '../components/BottomPurchaseBar/BottomPurchaseBar'
import ReceiverSection from '../components/ReceiverSection/ReceiverSection'

import { cards } from '@/data/cards'
import { products } from '@/data/products'

const OrderPage = () => {
  const [searchParams] = useSearchParams()
  const productId = searchParams.get('productId')
  const product = products.find((p) => p.id === Number(productId))

  if (!product) return <div>상품 정보를 찾을 수 없습니다.</div>

  const [selectedCardId, setSelectedCardId] = useState<number>(904)
  const selectedCard = cards.find((card) => card.id === selectedCardId)!
  const defaultMessage = selectedCard.defaultTextMessage

  const { methods, onSubmit, totalPrice, confirmReceivers } = useOrderForm({
    defaultMessage,
    productName: product.name,
    sellingPrice: product.price.sellingPrice,
    selectedCardId,
    selectedCardMessage: selectedCard.defaultTextMessage,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CardSelect
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
        />
        <CardPreview selectedCardId={selectedCardId} />
        <MessageInput />
        <SenderInput />
        <ReceiverSection onConfirm={confirmReceivers} />
        <ProductInfo product={product} />
        <BottomPurchaseBar handlePurchase={onSubmit} totalPrice={totalPrice} />
      </form>
    </FormProvider>
  )
}

export default OrderPage
