import GiftCardListLayout from "@/components/GiftCardListLayout"
import { useContext, useState } from "react"
import Layout from "@/components/Layout"
import type { CardTheme } from "@/context/CardContext"
import { CardContext } from "@/context/CardContext"
import GiftCardStyle from "@/components/GiftCardStyle"
interface CardProps {
  card: CardTheme
  selected: boolean
  onSelect: () => void
}

const GiftCard = ({ card, selected, onSelect }: CardProps) => {
  return (
    <GiftCardStyle $selected={selected} onClick={onSelect}>
      <img src={card.thumbUrl} alt={card.defaultTextMessage} key={card.id} />
    </GiftCardStyle>
  )
}

const GiftCardList = () => {
  const cards = useContext(CardContext)
  const [selectedId, setSelectedId] = useState<number>(cards[0]?.id ?? 0)
  return (
    <GiftCardListLayout>
      {cards.map(function (card) {
        return (
          <GiftCard
            key={card.id}
            card={card}
            selected={card.id === selectedId}
            onSelect={() => setSelectedId(card.id)}
          />
        )
      })}
    </GiftCardListLayout>
  )
}

const CardThumbnail = () => {
  return (
    <Layout>
      <GiftCardList />
    </Layout>
  )
}

export default CardThumbnail
