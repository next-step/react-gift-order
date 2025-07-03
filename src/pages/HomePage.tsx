import { HorizontalSpacing } from "@/components/common/Spacing/HorizontalSpacing";
import CategorySection from "@/components/home/CategorySection";
import FriendSelectBox from "@/components/home/FriendSelectBox";
import RankingSection from "@/components/home/RankingSection";
import SupportBanner from "@/components/home/SupportBanner";

export default function HomePage() {
  return (
    <>
      <HorizontalSpacing size="spacing6" />
      <FriendSelectBox />
      <HorizontalSpacing size="spacing6" />
      <CategorySection />
      <HorizontalSpacing size="spacing6" />
      <SupportBanner />
      <HorizontalSpacing size="spacing6" />
      <RankingSection />
    </>
  );
}
