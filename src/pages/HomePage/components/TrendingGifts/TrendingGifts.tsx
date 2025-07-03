import { useState, useEffect } from "react";
import { TRENDING_GIFTS_TABS, TRENDING_GIFTS_LABELS } from "./constants/labels";
import TabContentWrapper from "./TabContentWrapper/TabContentWrapper";
import ProductGrid from "./ProductGrid/ProductGrid";
import { trendingGiftsMockData } from "@/data/trendingGfitsMockData";
import type { TrendingGiftsType } from "@/types/TrendingGiftsType";
import {
  TrendingGiftsSection,
  TitleWarpper,
  SectionTitle,
  TabsWrapper,
  MainTabButton,
  TabIconContainer,
  TabLabel,
  MoreInfoWrapper,
  MoreInfo,
} from "./TrendingGifts.styles";
import { LocalStorageProvider } from "@/contexts/LocalStorageContext";
import { useMainTab, useSubTab } from "@/pages/HomePage/hooks/useLocalStorage";

function TrendingGiftsContent() {
  const [mainTabIdx, setMainTabIdx] = useMainTab();
  const [subTabIdx, setSubTabIdx] = useSubTab();
  const [data, setData] = useState<TrendingGiftsType[]>([]);

  useEffect(() => {
    // 현재는 mock 데이터로 대체
    setData(trendingGiftsMockData);
  }, [mainTabIdx, subTabIdx]);

  return (
    <TrendingGiftsSection>
      <TitleWarpper>
        <SectionTitle>{TRENDING_GIFTS_LABELS.SECTION_TITLE}</SectionTitle>
      </TitleWarpper>
      <TabsWrapper>
        {TRENDING_GIFTS_TABS.map((el, idx) => (
          <MainTabButton key={idx} onClick={() => setMainTabIdx(idx)}>
            <TabIconContainer isSelected={idx === mainTabIdx}>
              {el.ICON}
            </TabIconContainer>
            <TabLabel isSelected={idx === mainTabIdx}>{el.NAME}</TabLabel>
          </MainTabButton>
        ))}
      </TabsWrapper>

      <TabContentWrapper subTabIdx={subTabIdx} onClick={setSubTabIdx}>
        <ProductGrid products={data} />
      </TabContentWrapper>

      <MoreInfoWrapper>
        <MoreInfo>{TRENDING_GIFTS_LABELS.MORE_INFO}</MoreInfo>
      </MoreInfoWrapper>
    </TrendingGiftsSection>
  );
}

function TrendingGifts() {
  return (
    <LocalStorageProvider>
      <TrendingGiftsContent />
    </LocalStorageProvider>
  );
}

export default TrendingGifts;
