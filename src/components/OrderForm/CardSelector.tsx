import styled from '@emotion/styled';
import { MOCK_CARDFORM_LIST } from '@/components/OrderForm/mock';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  overflow: scroll auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
`;

const Card = styled.div<{ selected?: boolean }>(({ theme, selected }) => ({
  flex: '0 0 auto',
  width: '82px',
  height: '56px',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  border: '3px solid',
  borderColor: selected ? theme.colorScale.gray900 : 'transparent',
  cursor: 'pointer',
}));

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

type CardSelectorProps = {
  selectedCardId: number | null;
  onChange: (id: number) => void;
};

const CardSelector = ({ selectedCardId, onChange }: CardSelectorProps) => {
  return (
    <Wrapper>
      <Container>
        {MOCK_CARDFORM_LIST.map((card) => (
          <Card
            key={card.id}
            onClick={() => onChange(card.id)}
            selected={selectedCardId === card.id}
          >
            <CardImg src={card.thumbUrl} alt={card.defaultTextMessage} />
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default CardSelector;
