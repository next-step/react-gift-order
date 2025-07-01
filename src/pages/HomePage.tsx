import CategorySection from "@/components/CategorySection";
import FriendSelectBox from "@/components/FriendSelectBox";
import SupportBanner from "@/components/SupportBanner";
import RankingSection from "@/components/RankingSection/RankingSection";

export default function HomePage() {
  return (
    <div>
      <FriendSelectBox />
      <CategorySection />
      <SupportBanner />
      <RankingSection />
    </div>
  );
}
