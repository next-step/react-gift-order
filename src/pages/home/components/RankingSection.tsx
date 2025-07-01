// src/pages/home/components/RankingSection.tsx
import styled from "@emotion/styled";
import { RankingFilter } from "@/pages/home/components/RankingFilter";
import { RankingTab } from "@/pages/home/components/RankingTab";
import { RankingGrid } from "@/pages/home/components/RankingGrid";
import {
  type GenderType,
  RANKING_TABS,
  type TabType,
  GENDER_FILTERS,
} from "@/constants/ranking";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export const RankingSection = () => {
  const [gender, setGender] = useLocalStorageState<GenderType>(
    LOCAL_STORAGE_KEYS.RANKING_GENDER,
    "ALL",
    GENDER_FILTERS,
  );

  const [tab, setTab] = useLocalStorageState<TabType>(
    LOCAL_STORAGE_KEYS.RANKING_TAB,
    RANKING_TABS[0],
    RANKING_TABS,
  );

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <RankingFilter selected={gender} onChange={setGender} />
      <RankingTab selected={tab} onChange={setTab} />
      <RankingGrid gender={gender} tab={tab} />
    </Section>
  );
};

const Section = styled.section`
  padding: 24px 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;
