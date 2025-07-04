import RankingHeader from "@/components/home/RankingSection/components/RankingHeader/index";
import RankingFilterTabs from "@/components/home/RankingSection/components/RankingFilterTabs/index";
import RankingSubFilterTabs from "@/components/home/RankingSection/components/RankingSubFilterTabs/index";
import RankingGrid from "@/components/home/RankingSection/components/RankingGrid/index";
import { whiteSectionStyle } from "@/styles/CommonStyles";
import theme from "@/styles/theme";

export default function RankingSection() {
  return (
    <div css={whiteSectionStyle(theme)}>
      <RankingHeader />
      <RankingFilterTabs />
      <RankingSubFilterTabs />
      <RankingGrid />
    </div>
  );
}
