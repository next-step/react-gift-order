import orderCard from '@/data/orderCard';
import type { UseFormSetValue } from 'react-hook-form';
import type { OrderFormData } from '@/schemas/orderSchema';

type Props = {
  selectedCardId: number | null;
  setValue: UseFormSetValue<OrderFormData>;
  theme: any;
};

const CardSelector = ({ selectedCardId, setValue, theme }: Props) => {
  const handleSelectCard = (cardId: number) => {
    const isSelected = selectedCardId === cardId;
    setValue('selectedCardId', isSelected ? null : cardId);
    setValue(
      'message',
      isSelected ? '' : orderCard.find((c) => c.id === cardId)?.defaultTextMessage || ''
    );
  };

  const selectedCard =
    selectedCardId !== null ? orderCard.find((c) => c.id === selectedCardId) : null;

  return (
    <section>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: 8,
          margin: '8px 0 16px',
        }}
      >
        {orderCard.slice(0, 12).map((card) => (
          <img
            key={card.id}
            src={card.thumbUrl}
            alt="card"
            onClick={() => handleSelectCard(card.id)}
            style={{
              width: 80,
              height: 50,
              borderRadius: 8,
              cursor: 'pointer',
              border:
                selectedCardId === card.id
                  ? `2px solid ${theme.colors.blue900}`
                  : `1px solid ${theme.colors.semantic.borderDefault}`,
            }}
          />
        ))}
      </div>
      {selectedCard && (
        <img
          src={selectedCard.imageUrl}
          style={{ width: '100%', borderRadius: 12 }}
        />
      )}
    </section>
  );
};

export default CardSelector;
