import styled from "@emotion/styled";
import { useState } from "react";
import GiftItem from "./GiftItem";
import type { Gift } from "@/types/gift";

type GiftsListProps = {
  gifts: Gift[];
};

const GiftsList = ({ gifts }: GiftsListProps) => {
  const [showMore, setShowMore] = useState(false);

  const visibleGifts = showMore ? gifts : gifts.slice(0, 6);

  return (
    <>
      <GiftsGrid>
        {visibleGifts.map((gift, index) => (
          <GiftItem
            key={gift.id}
            gift={gift}
            rank={index + 1}
            as="button"
            type="button"
          />
        ))}
      </GiftsGrid>
      <GiftsToggle>
        <GiftsButton onClick={() => setShowMore(!showMore)}>
          {showMore ? "접기" : "더보기"}
        </GiftsButton>
      </GiftsToggle>
    </>
  );
};
export default GiftsList;

const GiftsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => `${theme.spacing.spacing6} ${theme.spacing.spacing2}`};
  padding: ${({ theme }) => `${theme.spacing.spacing4} 0`};
`;

const GiftsToggle = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GiftsButton = styled.button`
  max-width: 480px;
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;
