import * as S from './styles';

interface ReceiverRowProps {
  name: string;
  phone: string;
  quantity: number;
}

const ReceiverRow = ({ name, phone, quantity }: ReceiverRowProps) => {
  return (
    <S.Row>
      <S.Cell>{name}</S.Cell>
      <S.Cell>{phone}</S.Cell>
      <S.Cell>{quantity}</S.Cell>
    </S.Row>
  );
};

export default ReceiverRow; 