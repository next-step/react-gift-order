import PresentWho from "@/components/PresentWho"

import Text from "@/components/Text"

import GiftCardListLayout from "@/components/GiftCardListLayout"
import { useContext } from "react"
import Layout from "@/components/Layout"
import Blank from "@/components/Blank"
import Column from "@/components/Column"
import Trending from "./Trending"
import type { CardTheme } from "@/context/CardContext"
import { CardContext } from "@/context/CardContext"
import GiftCardStyle from "@/components/GiftCardStyle"
interface CardProps {
  card: CardTheme
}

const GiftCard = ({ card }: CardProps) => {
  return (
    <GiftCardStyle>
      <img src={card.thumbUrl} alt="" />
    </GiftCardStyle>
  )
}

const GiftCardList = () => {
  const cards = useContext(CardContext)
  return (
    <GiftCardListLayout>
      {cards.map(function (card) {
        return <GiftCard key={card.id} card={card} />
      })}
    </GiftCardListLayout>
  )
}

const CardThumbnail = () => {
  return (
    <Layout>
      <Layout>
        <Blank height="24px" />

        <GiftCardList />
        <Layout>
          <Blank height="24px" />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default CardThumbnail
