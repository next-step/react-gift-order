import type { Product } from '@/features/product/trend/types'
import type { ReceiverData } from '@/entities/order'

export type CardData = {
  id: number
  thumbUrl: string
  imageUrl: string
  defaultTextMessage: string
}

// * ReceiverData는 entities/order에서 import
export type { ReceiverData }

export type OrderForm = {
  card_data: CardData
  sender: string
  receivers: ReceiverData[]
  product: Product
}
