import { HorizontalSpacing } from "@/components/common/Spacing/HorizontalSpacing";
import CategorySection from "@/components/home/CategorySection";
import FriendSelectBox from "@/components/home/FriendSelectBox";
import RankingSection from "@/components/home/RankingSection";
import SupportBanner from "@/components/home/SupportBanner";

export default function HomePage() {
  return (
    <>
      <HorizontalSpacing size="spacing4" />
      <FriendSelectBox />
      <HorizontalSpacing size="spacing4" />
      <CategorySection />
      <HorizontalSpacing size="spacing4" />
      <SupportBanner />
      <HorizontalSpacing size="spacing4" />
      <RankingSection />
    </>
  );
}
