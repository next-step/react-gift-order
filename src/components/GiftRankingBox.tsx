import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import GiftObject from "./GiftObject";
import { useTheme } from "@emotion/react";
import giftData from "@/data/giftData";

const GiftRanking = () => {
  const theme = useTheme();
  return (
    <div css={giftRankingStyle(theme)}>
      {giftData.map((gift) => (
        <GiftObject key={gift.id} gift={gift} />
      ))}
    </div>
  );
};

export default GiftRanking;

const giftRankingStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: ${theme.colors.semantic.background.fill};
`;
