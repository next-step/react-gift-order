import styled from '@emotion/styled';
import { cardTemplates } from '@/mock/cardTemplates';
import type { CardTemplate } from '@/mock/cardTemplates';

const Scroll = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 4px;
  padding-top: 12px;
  background: #fff;
  padding-left: 16px;
  padding-right: 16px;

  &::-webkit-scrollbar {
    height: 16px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[300]};
    border: 4px solid ${({ theme }) => theme.colors.gray[100]};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 10px;
    border: 4px solid transparent;
    background-clip: content-box;
  }
`;

const Thumb = styled.img<{ active: boolean }>`
  width: 76px;
  height: 50px;
  border-radius: 8px;
  border: 3px solid ${({ active }) => (active ? '#000' : 'transparent')};
  cursor: pointer;
`;

interface Props {
  selectedId: number;
  onSelect: (tpl: CardTemplate) => void;
}

export default function CardPicker({ selectedId, onSelect }: Props) {
  return (
    <Scroll>
      {cardTemplates.map((tpl) => (
        <Thumb
          key={tpl.id}
          src={tpl.thumbUrl}
          alt="템플릿 이미지"
          active={tpl.id === selectedId}
          onClick={() => onSelect(tpl)}
        />
      ))}
    </Scroll>
  );
}
