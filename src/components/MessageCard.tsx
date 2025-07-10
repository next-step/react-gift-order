import styled from '@emotion/styled';
import { orderCardTemplates } from '../data/orderCardTemplateMock';

const Wrapper = styled.div`
  padding-bottom: 12px;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 8px 16px;
  gap: 8px;
`;

const Thumbnail = styled.img<{ selected: boolean }>`
  width: 76px;
  height: 50px;
  border: ${({ selected }) =>
    selected ? '3px solid #2A3038' : 'none'};
  border-radius: 8px;
  cursor: pointer;
`;

type Props = {
  selected: number;
  onCardSelect: (src: number) => void;
};

const MessageCard = ({ selected, onCardSelect }: Props) => {
  return (
    <Wrapper>
      <ScrollContainer>
        {orderCardTemplates.map(card => {
          return (
            <>
              <Thumbnail
                key={card.id}
                src={card.imageUrl}
                alt={card.defaultTextMessage}
                selected={selected === card.id}
                onClick={() => onCardSelect(card.id)}
              />
            </>
          );
        })}
      </ScrollContainer>
    </Wrapper>
  );
};

export default MessageCard;
