import styled from "@emotion/styled";
import GiftPersonType from "./GiftPersonType";
import { personType, presentType } from "@/data/giftType";
import { gifts } from "@/data/gift";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import GiftsList from "./GiftsList";

const GiftsRanking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [selectedTypes, setSelectedTypes] = useState({
    personType: query.get("personType") ?? personType[0].id,
    presentType: query.get("presentType") ?? presentType[0].id,
  });

  const handleFilterChange = (key: string, selectedType: string) => {
    const newSelectedTypes = { ...selectedTypes, [key]: selectedType };
    setSelectedTypes(newSelectedTypes);

    const searchParams = new URLSearchParams(newSelectedTypes).toString();
    navigate(`?${searchParams}`, { replace: true });
  };

  const duplicatedMockGifts = Array(21)
    .fill(null)
    .flatMap((_, i) =>
      gifts.map(gift => ({
        ...gift,
        id: gift.id + i,
      })),
    );

  return (
    <Background>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <GiftPersonTypeFlex>
        {personType.map((type, index) => (
          <GiftPersonType
            key={index}
            icon={type.icon}
            name={type.name}
            selected={selectedTypes.personType === type.id}
            onClick={() => handleFilterChange("personType", type.id)}
          />
        ))}
      </GiftPersonTypeFlex>
      <PresentTypeFlex>
        {presentType.map((type, index) => (
          <PresentType
            key={index}
            selected={selectedTypes.presentType === type.id}
            onClick={() => handleFilterChange("presentType", type.id)}
          >
            {type.name}
          </PresentType>
        ))}
      </PresentTypeFlex>
      <GiftsList gifts={duplicatedMockGifts} />
    </Background>
  );
};

export default GiftsRanking;

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const RankingTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing5} ${theme.spacing.spacing2}`};
`;

const GiftPersonTypeFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => `${theme.spacing.spacing4} 0`};
`;

const PresentTypeFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue.blue100};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing3} ${theme.spacing.spacing4}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue.blue300};
`;

const PresentType = styled.p<{ selected: boolean }>`
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme, selected }) =>
    selected
      ? theme.typography.body2Bold.fontWeight
      : theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blue.blue700 : theme.colors.blue.blue500};
  margin: ${({ theme }) => theme.spacing.spacing0};
  transition:
    color 200ms,
    font-weight 200ms;
  cursor: pointer;
`;
