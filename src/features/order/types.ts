import type { Product } from '@/features/product/trend/types'
import type { ReceiverData, CardData } from '@/entities/order'

export type { ReceiverData, CardData }

export type OrderForm = {
  card_data: CardData
  sender: string
  receivers: ReceiverData[]
  product: Product
}
