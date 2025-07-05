import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import GiftObject from "./GiftObject";
import { useTheme } from "@emotion/react";
import giftData from "@/data/giftData";
import { useNavigate } from "react-router-dom";

const GiftRanking = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div>
      <div css={giftRankingStyle(theme)}>
        {giftData.map((gift) => (
          <GiftObject
            key={gift.id}
            gift={gift}
            onClick={() => navigate(`/order/${gift.id}`)}
          />
        ))}
      </div>
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
