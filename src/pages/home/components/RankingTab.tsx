import styled from "@emotion/styled";
import { RANKING_TABS, type TabType } from "@/constants/ranking";

type RankingTabProps = {
  selected: TabType;
  onChange: (tab: TabType) => void;
};

export const RankingTab = ({ selected, onChange }: RankingTabProps) => {
  return (
    <TabWrapper>
      {RANKING_TABS.map((tab) => (
        <TabButton
          key={tab}
          active={selected === tab}
          onClick={() => onChange(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

const TabButton = styled.button<{ active: boolean }>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  border: none;
  border-bottom: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.colorScale.gray.gray1000 : "transparent"};
  color: ${({ active, theme }) =>
    active
      ? theme.colors.semantic.text.default
      : theme.colors.semantic.text.sub};
  background: none;
`;
