import { createContext } from "react"

interface Present {
  id: number
  name: string
  imageURL: string
  price: {
    basicPrice: number
    discountRate: number
    sellingPrice: number
  }
  brandInfo: {
    id: number
    name: string
    imageURL: string
  }
}
export const PresentContext = createContext<Present[]>([])
