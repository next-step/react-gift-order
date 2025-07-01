import CategorySection from "@/components/CategorySection";
import FriendSelectBox from "@/components/FriendSelectBox";
import SupportBanner from "@/components/SupportBanner";
import RankingSection from "@/components/RankingSection/RankingSection";

function App() {
  return (
    <div>
      <FriendSelectBox />
      <CategorySection />
      <SupportBanner />
      <RankingSection />
    </div>
  );
}

export default App;
