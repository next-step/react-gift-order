import { cardData } from "@/data/cardData";
import {
  ThumbNailContainerStyle,
  ThumbNailStyle,
} from "@/components/order/Order.style";
import { GiftCardThumb } from "@/components/GiftCardThumb";
import type { Theme } from "@emotion/react";

interface Props {
  theme: Theme;
  selectedId: number | undefined;
  onSelect: (id: number) => void;
}

const CardSelector: React.FC<Props> = ({ theme, selectedId, onSelect }) => {
  return (
    <div css={ThumbNailContainerStyle(theme)}>
      {cardData.map((card) => (
        <GiftCardThumb
          key={card.id}
          onClick={() => onSelect(card.id)}
          css={ThumbNailStyle(theme, card.id, selectedId)}
          src={card.thumbUrl}
        />
      ))}
    </div>
  );
};

export default CardSelector;
