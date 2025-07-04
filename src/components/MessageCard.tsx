import styled from '@emotion/styled';
import { orderCardTemplates } from '../data/orderCardTemplateMock';

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 8px 16px;
  gap: 8px;
`;

const Thumbnail = styled.img<{ selected: boolean }>`
  width: 82px;
  height: 56px;
  border: ${({ selected }) =>
    selected ? '3px solid #2A3038' : 'none'};
  border-radius: 8px;
  cursor: pointer;
`;

type Props = {
  selected: string;
  onSelect: (src: string) => void;
};

const MessageCard = ({ selected, onSelect }: Props) => {
  return (
    <ScrollContainer>
      {orderCardTemplates.map(card => {
        return (
          <Thumbnail
            key={card.id}
            src={card.imageUrl}
            alt={card.defaultTextMessage}
            selected={selected === card.imageUrl}
            onClick={() => onSelect(card.imageUrl)}
          />
        );
      })}
    </ScrollContainer>
  );
};

export default MessageCard;
