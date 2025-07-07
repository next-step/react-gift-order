import React from 'react';
import Image from '@/components/atoms/Image';
import * as S from './styles';

interface OrderCardProps {
  id: number;
  thumbUrl: string;
  isSelected: boolean;
  onClick: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ id, thumbUrl, isSelected, onClick }) => {
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
