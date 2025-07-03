import CategorySection from "@/components/home/CategorySection";
import FriendSelectBox from "@/components/home/FriendSelectBox";
import RankingSection from "@/components/home/RankingSection";
import SupportBanner from "@/components/home/SupportBanner";

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
