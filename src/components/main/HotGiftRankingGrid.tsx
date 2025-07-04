import { generateMockArray } from "@/__mock__/generate-mock-array";
import { Button } from "@/components/common";
import { ROUTE_PATH } from "@/constants";
import type { ProductType } from "@/types";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotGiftRankingGridContainer = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: `${theme.spacing2}`,
  rowGap: `${theme.spacing6}`,
}));

const HotGiftRankingGridItem = styled.div(({ theme }) => ({
  backgroundColor: `${theme.color.gray[0]}`,
  borderRadius: `${theme.spacing3}`,
  cursor: "pointer",
  position: "relative",
}));

const HotGiftRankingImageContainer = styled.img(({ theme }) => ({
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: "4px",
  marginBottom: `${theme.spacing3}`,
}));

const RankBadge = styled.div<{ rank: number }>(({ theme, rank }) => ({
  position: "absolute",
  top: `${theme.spacing1}`,
  left: `${theme.spacing1}`,
  width: "20px",
  height: "20px",
  backgroundColor: rank <= 3 ? theme.color.red[600] : theme.color.gray[600],
  color: `${theme.color.gray[0]}`,
  fontSize: `${theme.typography.label2Bold.fontSize}`,
  fontWeight: `${theme.typography.label2Bold.fontWeight}`,
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));

const HotGiftCategoryText = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.label1Regular.fontSize}`,
  fontWeight: `${theme.typography.label1Regular.fontWeight}`,
  lineHeight: `${theme.typography.label1Regular.lineHeight}`,
  color: `${theme.color.gray[500]}`,
}));

const HotGiftProductTitle = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.label1Regular.fontSize}`,
  fontWeight: `${theme.typography.label1Regular.fontWeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: `${theme.spacing2}`,
}));

const HotGiftPriceText = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.title2Bold.fontSize}`,
  fontWeight: `${theme.typography.title2Bold.fontWeight}`,
  color: `${theme.color.gray[900]}`,
}));

const ButtonContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: `${theme.spacing8} 0 ${theme.spacing10} 0`,
}));

const RANK_CORRECTION_NUMBER = 1;

export const HotGiftRankingGrid = () => {
  const [showMore, setShowMore] = useState(false);
  const INITIAL_SHOW_COUNT = 6;
  const mockData = generateMockArray();
  const navigate = useNavigate();
  const displayedItems = showMore
    ? mockData
    : mockData.slice(0, INITIAL_SHOW_COUNT);

  const handleProductSelect = (item: ProductType) => {
    navigate(ROUTE_PATH.ORDER.replace(":id", item.id.toString()));
  };
  return (
    <>
      <HotGiftRankingGridContainer>
        {displayedItems.map((item, index) => (
          <HotGiftRankingGridItem
            key={item.id}
            onClick={() => handleProductSelect(item)}
          >
            <HotGiftRankingImageContainer
              src={item.imageURL}
            ></HotGiftRankingImageContainer>
            <RankBadge rank={index + RANK_CORRECTION_NUMBER}>
              {index + RANK_CORRECTION_NUMBER}
            </RankBadge>
            <HotGiftCategoryText>{item.brandInfo.name}</HotGiftCategoryText>
            <HotGiftProductTitle>{item.name}</HotGiftProductTitle>
            <HotGiftPriceText>{item.price.basicPrice}원</HotGiftPriceText>
          </HotGiftRankingGridItem>
        ))}
      </HotGiftRankingGridContainer>

      {mockData.length > INITIAL_SHOW_COUNT && (
        <ButtonContainer>
          <Button
            variant="secondary"
            size="medium"
            width="75%"
            onClick={() => setShowMore(prev => !prev)}
          >
            {showMore ? "접기" : "더보기"}
          </Button>
        </ButtonContainer>
      )}
    </>
  );
};
