import ReceiverRow from '../ReceiverRow';
import * as S from './styles';

interface ReceiverData {
  name: string;
  phone: string;
  quantity: number;
}

interface ReceiverTableProps {
  receivers: ReceiverData[];
}

const ReceiverTable = ({ receivers }: ReceiverTableProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderCell>이름</S.HeaderCell>
        <S.HeaderCell>전화번호</S.HeaderCell>
        <S.HeaderCell>수량</S.HeaderCell>
      </S.Header>
      <S.Body>
        {receivers.map((receiver, index) => (
          <ReceiverRow
            key={index}
            name={receiver.name}
            phone={receiver.phone}
            quantity={receiver.quantity}
          />
        ))}
      </S.Body>
    </S.Container>
  );
};

export default ReceiverTable; 