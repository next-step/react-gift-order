import styled from "@emotion/styled";
import RankingList from "@/pages/Gift/components/RankingList";
import { rankingRankCategoryList, rankingTargetCategory } from "@/assets/rankingCategory";
import { useSearchParams } from "react-router-dom";

const Ranking = () => {
  const [rankingCategoryParams, setRankCategoryParams] = useSearchParams();

  const targetTypeParams = rankingCategoryParams.get("targetType")?.trim();
  const rankTypeParams = rankingCategoryParams.get("rankType")?.trim();

  const isValidTarget = targetTypeParams && rankingTargetCategory.some((item) => item.targetType === targetTypeParams);
  const isValidRank = rankTypeParams && rankTypeParams in rankingRankCategoryList;

  const selectedTarget = isValidTarget ? targetTypeParams : rankingTargetCategory[0].targetType;
  const selectedRank = isValidRank ? rankTypeParams : Object.keys(rankingRankCategoryList)[0];

  const changeTargetType = (targetType: string) => {
    rankingCategoryParams.set("targetType", targetType);
    setRankCategoryParams(rankingCategoryParams, { replace: true });
  };
  const changeRankType = (rankType: string) => {
    rankingCategoryParams.set("rankType", rankType);
    setRankCategoryParams(rankingCategoryParams, { replace: true });
  };
  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <NavBar>
        <TargetCategoryList>
          {rankingTargetCategory.map((targetCategory) => (
            <TargetCategory
              key={targetCategory.targetType}
              onClick={() => {
                changeTargetType(targetCategory.targetType);
              }}
            >
              <TargetCategoryImg selected={checkSelected(targetCategory.targetType, selectedTarget)}>
                {targetCategory.image}
              </TargetCategoryImg>
              <TargetCategoryName selected={checkSelected(targetCategory.targetType, selectedTarget)}>
                {targetCategory.name}
              </TargetCategoryName>
            </TargetCategory>
          ))}
        </TargetCategoryList>
        <RankCategoryList>
          {Object.entries(rankingRankCategoryList).map(([keyword, rankCategory]) => (
            <RankCategory
              key={keyword}
              selected={checkSelected(keyword, selectedRank)}
              onClick={() => {
                changeRankType(keyword);
              }}
            >
              {rankCategory}
            </RankCategory>
          ))}
        </RankCategoryList>
      </NavBar>
      <RankingList />
    </Container>
  );
};

const checkSelected = (element: string, selected: string) => {
  return element === selected;
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
};
const TargetCategoryImg = styled.div<SelectedAndTheme>`
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-weight: bold;
  ${({ selected, theme }) => {
    return `
      background-color: ${selected ? theme.color.blue600 : theme.color.blue200};
      color: ${selected ? theme.color.gray00 : theme.color.gray500};
  `;
  }}
`;
const TargetCategoryName = styled.p<SelectedAndTheme>`
  ${({ selected, theme }) => {
    return `
      font: ${theme.typography.label1Bold};
      color: ${selected ? theme.color.blue600 : theme.color.gray500};
  `;
  }}
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
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ selected, theme }) => {
    return `
      font: ${selected ? theme.typography.label1Bold : theme.typography.label1Regular};
      color: ${selected ? theme.color.blue600 : theme.color.blue400};`;
  }}
`;

export default Ranking;
