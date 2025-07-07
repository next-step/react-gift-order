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

type CardsProps = {
  currentId: number;
  currentOrder: ordersType | undefined;
  text: string;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleThumbClick: (id: number) => void;
};

function Cards({ currentId, currentOrder, text, handleTextChange, handleThumbClick }: CardsProps) {
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
      {text.length == 0 && <ErrorContainer>메세지를 입력해주세요.</ErrorContainer>}
    </CardContainer>
  );
}

export default Cards;
