import {
  CardContainer,
  ThumbContainer,
  ThumbImgWrapper,
  ThumbImg,
  Image,
  InputTextArea,
} from '@/styles/Order/Thumbnail.styles';
import { ErrorContainer } from '@/styles/ErrorContainer.styles';
import { cards } from '@/mocks/mockorder';
import type { ordersType } from '@/mocks/mockorder';
import type { ErrorType } from '@/hooks/useOrder';

type CardsProps = {
  currentId: number;
  currentOrder: ordersType | undefined;
  text: string;
  errors: ErrorType;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleThumbClick: (id: number) => void;
};

function Cards({
  currentId,
  currentOrder,
  text,
  errors,
  handleTextChange,
  handleThumbClick,
}: CardsProps) {
  return (
    <CardContainer>
      <ThumbContainer>
        {cards.map((card) => (
          <ThumbImgWrapper key={card.id} clicked={currentId == card.id}>
            <ThumbImg
              key={card.id}
              src={card.thumbUrl}
              alt="thumbnail"
              onClick={() => handleThumbClick(card.id)}
            />
          </ThumbImgWrapper>
        ))}
      </ThumbContainer>
      {currentOrder && <Image src={currentOrder.imageUrl} alt="image" />}
      <InputTextArea value={text} onChange={handleTextChange} />
      {errors.text && <ErrorContainer>{errors.text}</ErrorContainer>}
    </CardContainer>
  );
}

export default Cards;
