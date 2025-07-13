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
import type { UseFormRegister, UseFormSetValue, FieldErrors } from 'react-hook-form';
import type { FormValues } from '@/pages/Order/Order';

type CardsProps = {
  currentOrder: ordersType | undefined;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  currentCardId: number;
  errors: FieldErrors<FormValues>;
};

function Cards({ currentOrder, register, setValue, currentCardId, errors }: CardsProps) {
  return (
    <CardContainer>
      <ThumbContainer>
        {cards.map((card) => (
          <ThumbImgWrapper key={card.id} clicked={currentCardId == card.id}>
            <ThumbImg
              src={card.thumbUrl}
              alt="thumbnail"
              onClick={() => setValue('currentCardId', card.id)}
            />
          </ThumbImgWrapper>
        ))}
      </ThumbContainer>
      {currentOrder && <Image src={currentOrder.imageUrl} alt="image" />}
      <InputTextArea
        {...register('text', {
          validate: (value) => {
            if (value.length < 1) return '메시지를 입력하세요.';
            return true;
          },
        })}
      />
      {errors.text && <ErrorContainer>{errors.text.message}</ErrorContainer>}
      <input type="hidden" {...register('currentCardId')} />
    </CardContainer>
  );
}

export default Cards;
