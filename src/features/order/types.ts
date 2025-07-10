import type { Product } from '@/features/product/trend/types'

export type CardData = {
  id: number
  thumbUrl: string
  imageUrl: string
  defaultTextMessage: string
}

export type ReceiverData = {
  name: string
  phone: string
  count: number
}

export type OrderForm = {
  card_data: CardData
  sender: string
  receiver: ReceiverData
  product: Product
}
