/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { GiftItem } from '@/types';
import { palette } from '@/styles/theme';

const card = css`
  position: relative;
  border: 1px solid ${palette.gray200};
  border-radius: 8px;
  overflow: hidden;
  background: ${palette.white};
`;
const imgBox = css`
  width: 100%;
  aspect-ratio: 1/1; // 가로=세로 비율 유지하는 
  img { width: 100%; height: 100%; object-fit: cover; } // 이미지가 박스에 꽉 차도록
`;

const info = css`
  padding: 8px;
  font-size: 12px;
  line-height: 1.2;
  .name { font-weight: 500; margin-bottom: 4px; }
  .price { font-weight: 700; }
`;

interface Props {
  item: GiftItem;
  rank: number;
}

export const GiftCard = ({ item, rank }: Props) => (
  <div css={card}>
    <div css={imgBox}>
      <img src={item.imageURL} alt={item.name} />
    </div>
    <div css={info}>
      <div className="name">{item.name}</div>
      <div className="price">{item.price.sellingPrice}원</div>
    </div>
    <span
      css={css`
        position: absolute;
        top: 4px;
        left: 4px;
        background: ${palette.primary};
        color: ${palette.black};
        font-size: 10px;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 12px;
      `}
    >
     {rank}
    </span>
  </div>
);
