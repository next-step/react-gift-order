import type { RankTypeTemp, RankType } from "@/constants/tabs";
import {
  Wrapper,
  BarButton,
} from "@/components/RankSelectionBar/RankSelectionBar.style";

export interface RankSelectionBarProps {
  tabs: readonly RankTypeTemp[];
  selected: RankType;
  onSelect: (rankType: RankType) => void;
}

function RankSelectionBar({ tabs, selected, onSelect }: RankSelectionBarProps) {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <BarButton
          key={tab.rankType}
          active={selected === tab.rankType}
          onClick={() => onSelect(tab.rankType)}
        >
          {tab.label}
        </BarButton>
      ))}
    </Wrapper>
  );
}

export default RankSelectionBar;
