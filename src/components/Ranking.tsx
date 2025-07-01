import type { ThemeType } from "@/types/ThemeType";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RankingList from "@/components/RankingList";
import { rankingTargetCategory } from "@/assets/rankingTargetCategory";
import { useSearchParams } from "react-router-dom";

const rankingRankCategoryList = {
  MANY_WISH: "받고 싶어한",
  MANY_RECEIVE: "많이 선물한",
  MANY_WISH_RECEIVE: "위시로 받은",
} as const;

const Ranking = () => {
  const [rankingCategoryParams, setRankCategoryParams] = useSearchParams();
  const targetTypeCategory = () => {
    const targetType = rankingCategoryParams.get("targetType")?.trim();
    if (targetType && rankingTargetCategory.some((item) => item.targetType === targetType)) {
      return targetType;
    } else {
      return rankingTargetCategory[0].targetType;
    }
  };
  const rankTypeCategory = () => {
    const rankType = rankingCategoryParams.get("rankType")?.trim();
    if (rankType && rankType in rankingRankCategoryList) {
      return rankType;
    }
    return Object.keys(rankingRankCategoryList)[0];
  };

  const [selectedTargetCategory, setSelectedTargetCategory] = useState(targetTypeCategory);
  const [selectedRankCategory, setSelectedRankCategory] = useState(rankTypeCategory);
  const theme = useTheme();
  const isSelected = (element: string, selected: string) => {
    return element === selected;
  };

  useEffect(() => {
    rankingCategoryParams.set("targetType", selectedTargetCategory);
    rankingCategoryParams.set("rankType", selectedRankCategory);
    setRankCategoryParams(rankingCategoryParams);
  }, [selectedTargetCategory, selectedRankCategory]);
  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <NavBar>
        <TargetCategoryList>
          {rankingTargetCategory.map((e) => (
            <TargetCategory
              key={e.targetType}
              onClick={() => {
                setSelectedTargetCategory(e.targetType);
              }}
            >
              <TargetCategoryImg selected={isSelected(e.targetType, selectedTargetCategory)} theme={theme}>
                {e.image}
              </TargetCategoryImg>
              <TargetCategoryName selected={isSelected(e.targetType, selectedTargetCategory)} theme={theme}>
                {e.name}
              </TargetCategoryName>
            </TargetCategory>
          ))}
        </TargetCategoryList>
        <RankCategoryList>
          {Object.entries(rankingRankCategoryList).map(([keyword, value]) => (
            <RankCategory
              key={keyword}
              selected={isSelected(keyword, selectedRankCategory)}
              theme={theme}
              onClick={() => {
                setSelectedRankCategory(keyword);
              }}
            >
              {value}
            </RankCategory>
          ))}
        </RankCategoryList>
      </NavBar>
      <RankingList />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
`;
const Title = styled.h3`
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TargetCategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;
const TargetCategory = styled.button`
  width: 3.625rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
type SelectedAndTheme = {
  selected: boolean;
  theme: ThemeType;
};
const TargetCategoryImg = styled.div<SelectedAndTheme>`
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${(props) => (props.selected ? props.theme.color.blue600 : props.theme.color.blue200)};
  color: ${(props) => (props.selected ? props.theme.color.gray00 : props.theme.color.gray500)};
  font-weight: bold;
`;
const TargetCategoryName = styled.p<SelectedAndTheme>`
  font: ${({ theme }) => theme.typography.label1Bold};
  color: ${(props) => (props.selected ? props.theme.color.blue600 : props.theme.color.gray500)};
`;
const RankCategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.blue200};
  border: 1px solid ${({ theme }) => theme.color.blue300};
  border-radius: 15px;
  padding: 12px 16px;
  margin-bottom: 20px;
`;
const RankCategory = styled.button<SelectedAndTheme>`
  width: 100%;
  font: ${(props) => (props.selected ? props.theme.typography.label1Bold : props.theme.typography.label1Regular)};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.selected ? props.theme.color.blue600 : props.theme.color.blue400)};
  cursor: pointer;
`;

export default Ranking;
