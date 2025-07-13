import styled from '@emotion/styled'
import { cardMock } from '@/pages/OrderPage/cardMock'

interface CardSelectorProps {
  selectedCard: (typeof cardMock)[0]
  onSelectCard: (card: (typeof cardMock)[0]) => void
}

export function CardSelector({
  selectedCard,
  onSelectCard,
}: CardSelectorProps) {
  return (
    <CardList>
      {cardMock.map((card) => (
        <CardThumbnail
          key={card.id}
          src={card.thumbUrl}
          alt="card"
          onClick={() => onSelectCard(card)}
          selected={selectedCard.id === card.id}
        />
      ))}
    </CardList>
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
      selected ? theme.colors.gray1000 : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`
