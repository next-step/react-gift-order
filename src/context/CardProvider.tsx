import { CardContext } from "@/context/CardContext"
import MOCK_CARD from "@/mock_card"

interface Props {
  children: React.ReactNode
}

const CardProvider = ({ children }: Props) => {
  return (
    <CardContext.Provider value={MOCK_CARD}>{children}</CardContext.Provider>
  )
}

export default CardProvider
