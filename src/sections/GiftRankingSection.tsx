import { useState } from "react";
import styled from "@emotion/styled";
import { giftRankingData } from "@/mocks/giftRankingData";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "react-router";

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing5};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title.title2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const FilterButton = styled.button<{ active?: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.color.blue.blue700 : theme.color.semantic.textSub};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  white-space: nowrap;
`;

const Icon = styled.div<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ theme, active }) =>
    active ? theme.color.blue.blue700 : theme.color.blue.blue100};
  color: ${({ active }) => (active ? "#fff" : "#555")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 4px;
`;

const TabWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.semantic.backgroundDefault};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing4};
`;

const TabButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  color: ${({ theme, active }) =>
    active ? theme.color.blue.blue700 : theme.color.semantic.textSub};
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LoadMore = styled.button`
  margin: ${({ theme }) => theme.spacing.spacing5} auto 0;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  display: block;
`;

export default function GiftRankingSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilter = searchParams.get("targetType") || "ALL";
  const initialTab = searchParams.get("rankType") || "WANT";

  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { label: "전체", icon: "ALL", value: "ALL" },
    { label: "여성이", icon: "👩🏻", value: "FEMALE" },
    { label: "남성이", icon: "👨🏻", value: "MALE" },
    { label: "청소년이", icon: "👦🏻", value: "TEEN" },
  ];

  const tabs = [
    { label: "받고 싶어한", value: "WANT" },
    { label: "많이 선물한", value: "MANY_RECEIVE" },
    { label: "위시로 받은", value: "WISH" },
  ];

  const updateParams = (target: string, rank: string) => {
    setSearchParams({
      targetType: target,
      rankType: rank,
    });
  };

  const handleFilterClick = (value: string) => {
    setSelectedFilter(value);
    updateParams(value, selectedTab);
  };

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
    updateParams(selectedFilter, value);
  };

  const repeatedData = [...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData, ...giftRankingData].slice(0, 12);
  const visibleData = showAll ? repeatedData : repeatedData.slice(0, 6);

  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>

      <FilterRow>
        {filters.map(({ label, icon, value }) => (
          <FilterButton
            key={value}
            active={selectedFilter === value}
            onClick={() => handleFilterClick(value)}
          >
            <Icon active={selectedFilter === value}>{icon}</Icon>
            {label}
          </FilterButton>
        ))}
      </FilterRow>

      <TabWrapper>
        {tabs.map(({ label, value }) => (
          <TabButton
            key={label}
            active={selectedTab === value}
            onClick={() => handleTabClick(value)}
          >
            {label}
          </TabButton>
        ))}
      </TabWrapper>

      <Grid>
        {visibleData.map((item, index) => (
          <ProductCard
            key={`${item.id}-${index}`}
            item={item}
            rank={index + 1}
          />
        ))}
      </Grid>

      <LoadMore onClick={() => setShowAll(!showAll)}>
        {showAll ? "접기" : "더보기"}
      </LoadMore>
    </Wrapper>
  );
}
