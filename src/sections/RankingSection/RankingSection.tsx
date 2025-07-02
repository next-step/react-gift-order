import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Wrapper,
  Title,
  ButtonGroup,
} from "@/sections/RankingSection/RankingSection.style";
import AgeSelectionButton from "@/components/AgeSelectionButton/AgeSelectionButton";
import RankSelectionBar from "@/components/RankSelectionBar/RankSelectionBar";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";
import CardList from "@/components/CardList/CardList";
import { cardData } from "@/mockdata/cardData.ts";
import { AGE_SELECT } from "@/constants/age";
import { RANK_SELECT } from "@/constants/tabs";
import type { TargetType } from "@/constants/age";
import type { RankType } from "@/constants/tabs";

const MIN_VISIBLE_CARDS = 6;

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTarget =
    (searchParams.get("targetType") as TargetType) ?? "ALL";
  const selectedRank =
    (searchParams.get("rankType") as RankType) ?? "MANY_WISH";
  const [showAll, setShowAll] = useState(false);

  const cards = cardData.map((item) => ({
    id: item.id,
    imageUrl: item.imageURL,
    brand: item.brandInfo.name,
    name: item.name,
    price: item.price.sellingPrice,
  }));

  const visibleCards = showAll ? cards : cards.slice(0, MIN_VISIBLE_CARDS);

  const handleTargetSelect = (target: TargetType) => {
    const params = new URLSearchParams(searchParams);
    params.set("targetType", target);
    setSearchParams(params);
  };

  const handleRankSelect = (rank: RankType) => {
    const params = new URLSearchParams(searchParams);
    params.set("rankType", rank);
    setSearchParams(params);
  };
  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>
      <ButtonGroup>
        {AGE_SELECT.map((btn) => (
          <AgeSelectionButton
            key={btn.ageType}
            ageType={btn.ageType}
            label={btn.label}
            emoji={btn.emoji}
            selected={selectedTarget === btn.ageType}
            onClick={handleTargetSelect}
          />
        ))}
      </ButtonGroup>
      <RankSelectionBar
        tabs={RANK_SELECT}
        selected={selectedRank}
        onSelect={handleRankSelect}
      />
      <section>
        <CardList cards={visibleCards} />
        {!showAll && cards.length > MIN_VISIBLE_CARDS && (
          <ShowMoreButton onClick={() => setShowAll(true)}>
            더보기
          </ShowMoreButton>
        )}
        {showAll && (
          <ShowMoreButton onClick={() => setShowAll(false)}>
            접기
          </ShowMoreButton>
        )}
      </section>
    </Wrapper>
  );
};

export default RankingSection;
