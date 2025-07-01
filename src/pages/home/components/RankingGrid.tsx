import styled from "@emotion/styled";
import { useState } from "react";
import { RankingCard } from "@/pages/home/components/RankingCard";
import { type TabType, type GenderType } from "@/constants/ranking";
import { mockRankingData } from "@/mock/mockData";
import { INITIAL_RANKING_COUNT } from "@/constants/grid";

type RankingGridProps = {
  gender: GenderType;
  tab: TabType;
};

export const RankingGrid = ({ gender, tab }: RankingGridProps) => {
  void gender;
  void tab;

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? mockRankingData
    : mockRankingData.slice(0, INITIAL_RANKING_COUNT);
  const canToggle = mockRankingData.length > INITIAL_RANKING_COUNT;

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <>
      <Grid>
        {visibleItems.map((item, idx) => (
          <RankingCard
            key={item.id}
            rank={idx + 1}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price.sellingPrice}
            brandName={item.brandInfo.name}
            brandImageURL={item.brandInfo.imageURL}
          />
        ))}
      </Grid>

      {canToggle && (
        <ToggleButton onClick={handleToggle}>
          {showAll ? "접기" : "더보기"}
        </ToggleButton>
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 12px;
  margin-top: 16px;
`;

const ToggleButton = styled.button`
  margin: 24px auto 0;
  display: block;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #f7f8f9;
  color: #2a3038;
  border: 1px solid #dcdee3;
`;
