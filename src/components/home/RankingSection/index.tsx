import RankingHeader from "@/components/home/RankingSection/components/RankingHeader/index";
import RankingFilterTabs from "@/components/home/RankingSection/components/RankingFilterTabs/index";
import RankingSubFilterTabs from "@/components/home/RankingSection/components/RankingSubFilterTabs/index";
import RankingGrid from "@/components/home/RankingSection/components/RankingGrid/index";

export default function RankingSection() {
  return (
    <>
      <RankingHeader />
      <RankingFilterTabs />
      <RankingSubFilterTabs />
      <RankingGrid />
    </>
  );
}
