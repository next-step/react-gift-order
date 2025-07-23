import styled from '@emotion/styled';
import type { CardTemplate } from '@/types/order';

interface LetterCardSelectorProps {
  templates: CardTemplate[];
  selectedId: number;
  onSelect: (id: number) => void;
}

export function LetterCardSelector({ templates, selectedId, onSelect }: LetterCardSelectorProps) {
  return (
    <Container>
      {templates.map(template => (
        <Card
          key={template.id}
          src={template.thumbUrl}
          alt={`카드 템플릿 ${template.id}`}
          isSelected={template.id === selectedId}
          onClick={() => onSelect(template.id)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px 0;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Card = styled.img<{
  isSelected: boolean;
}>`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 3px solid ${({ isSelected, theme }) => (isSelected ? theme.semanticColors.brand.kakaoYellow : 'transparent')};
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  flex-shrink: 0;
`;
