import { cards } from '@/data/cards'
import { PreviewContainer, CardImage } from './CardPreview.styles'

interface CardPreviewProps {
  selectedCardId: number
}

const CardPreview = ({ selectedCardId }: CardPreviewProps) => {
  const card = cards.find((c) => c.id === selectedCardId)
  if (!card) return null

  return (
    <PreviewContainer>
      <CardImage src={card.imageUrl} alt="card-preview" />
    </PreviewContainer>
  )
}

export default CardPreview
