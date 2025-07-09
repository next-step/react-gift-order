import type { MessageCard } from '@/types';
import { messageCardTemplates } from '@/data/messageCards';
import * as S from '@/styles/OrderPage.styles';

interface Props {
  selectedCard: MessageCard;
  onCardSelect: (card: MessageCard) => void;
  message: string;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const MessageCardSection = ({ selectedCard, onCardSelect, message, onMessageChange }: Props) => (
  <>
    <div css={S.cardSelector}>
      <div className="scroll-container">
        {messageCardTemplates.map(card => (
          <button
            key={card.id}
            className={`thumb-btn ${selectedCard.id === card.id ? 'active' : ''}`}
            onClick={() => onCardSelect(card)}
          >
            <img src={card.thumbUrl} alt={`card-${card.id}`} />
          </button>
        ))}
      </div>
    </div>
    <div css={S.cardPreview}>
      <img src={selectedCard.imageUrl} alt="Selected Card Preview" />
    </div>
    <div css={S.messageGroup}>
      <textarea
        name="message"
        placeholder="축하 메시지를 입력해주세요"
        value={message}
        onChange={onMessageChange}
      />
    </div>
  </>
);
