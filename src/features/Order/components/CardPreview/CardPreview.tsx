import { cards } from '@/data/cards'
import * as S from './CardPreview.styles'

interface CardPreviewProps {
  selectedCardId: number
}

const CardPreview = ({ selectedCardId }: CardPreviewProps) => {
  const card = cards.find((c) => c.id === selectedCardId)
  if (!card) return null

  return (
    <S.PreviewContainer>
      <S.CardImage src={card.imageUrl} alt="card-preview" />
    </S.PreviewContainer>
  )
}

export default CardPreview
