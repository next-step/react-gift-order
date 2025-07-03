import GiftThemes from "../components/GiftThemes";
import RealtimeRanking from "../components/RealtimeRanking";
import SelectFriends from "../components/SelectFriends";
import Entertainment from "../components/EnterTainment";
const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <SelectFriends />

      <GiftThemes />

      <Entertainment />

      <RealtimeRanking />
    </div>
  );
};

export default HomePage;
