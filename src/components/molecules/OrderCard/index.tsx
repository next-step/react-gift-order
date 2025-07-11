import { Image } from '@/components';
import { type ClickHandler } from '@/components';
import { type Order } from '@/data/orders';
import * as S from './styles';

//단위가 작은 컴포넌트(Atom or Molcule)에선 필요한 타입만 뽑아서 사용하도록 구현
interface OrderCardProps extends Pick<Order, 'id' | 'thumbUrl'> {
  isSelected: boolean;
  onClick: ClickHandler;
}

const OrderCard = ({ id, thumbUrl, isSelected, onClick }: OrderCardProps) => {
  return (
    <S.Container isSelected={isSelected} onClick={onClick}>
      <Image
        src={thumbUrl}
        alt={`${id}번 메시지 카드`}
        variant="card"
      />
    </S.Container>
  );
};

export default OrderCard;
