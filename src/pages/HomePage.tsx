import Entertainment from "../components/HomeComponent/EntertainmentSection";
import FriendSelectSection from "../components/HomeComponent/FriendSelectSection";
import { SortOptionSection } from "../components/HomeComponent/SortOptionSection";
import { ThemeSection } from "../components/HomeComponent/ThemeSection";

const HomePage = () => {
  return (
    <div>
      <FriendSelectSection />
      <ThemeSection />
      <Entertainment />
      <SortOptionSection />
    </div>
  );
};
export default HomePage;
