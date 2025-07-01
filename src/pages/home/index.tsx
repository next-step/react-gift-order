import { FriendBanner } from "@/pages/home/components/FriendBanner";
import { CategorySection } from "@/pages/home/components/CategorySection";
import { KakaoTechCampusBanner } from "@/pages/home/components/KakaoTechCampusBanner";
import { RankingSection } from "@/pages/home/components/RankingSection";

export default function HomePage() {
  return (
    <>
      <FriendBanner />
      <CategorySection />
      <KakaoTechCampusBanner />
      <RankingSection />
    </>
  );
}
