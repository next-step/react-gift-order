/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { GiftItem } from '@/types';
import { GiftCard } from '@/components/GiftCard';

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px 15px;
  padding-bottom: 50px;
`;

interface Props {
  items: GiftItem[];
}

export const RankingGrid = ({ items }: Props) => (
  <div css={grid}>
    {items.map((item, i) => (
      <GiftCard key={item.id} item={item} rank={i + 1} />
    ))}
  </div>
);