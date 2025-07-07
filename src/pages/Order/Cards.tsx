import {
  CardContainer,
  ThumbContainer,
  ThumbImgWrapper,
  ThumbImg,
  Image,
  InputTextArea,
} from '@/styles/Order/Thumbnail.styles';
import { ErrorContainer } from '@/styles/ErrorContainer.styles';
import { orders } from '@/mocks/mockorder';
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
        {orders.map((order) => (
          <ThumbImgWrapper key={order.id} clicked={currentId == order.id}>
            <ThumbImg
              key={order.id}
              src={order.thumbUrl}
              alt="thumbnail"
              onClick={() => handleThumbClick(order.id)}
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
