import { cards } from '@/data/cards'
import type { Dispatch, SetStateAction } from 'react'
import * as S from './CardSelect.styles'

interface Props {
  selectedCardId: number
  setSelectedCardId: Dispatch<SetStateAction<number>>
}

const CardSelect: React.FC<Props> = ({ selectedCardId, setSelectedCardId }) => {
  return (
    <S.Container>
      {cards.map((card) => (
        <S.Thumbnail
          key={card.id}
          src={card.thumbUrl}
          alt="card"
          isSelected={card.id === selectedCardId}
          onClick={() => setSelectedCardId(card.id)}
        />
      ))}
    </S.Container>
  )
}

export default CardSelect
