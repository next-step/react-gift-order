import { useState } from 'react';
import type { cardTemplate } from '@/types/card';
import { cardTemplateMocks } from '@/mocks/cardTemplateMock';

export const useCardSelection = () => {
  const [selectedCard, setSelectedCard] = useState<cardTemplate | null>(cardTemplateMocks[0]);

  const selectCard = (card: cardTemplate) => setSelectedCard(card);

  return { selectedCard, selectCard };
};
