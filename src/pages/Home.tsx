import { FriendSelect } from '../components/FriendSelect';
import { GiftThemeGrid } from '../components/GiftThemeGrid';
import { YellowBanner } from '../components/YellowBanner';
import { RankingGrid } from '../components/RankingGrid';
import GiftRankingFilter from '../components/GiftRankingFilter';
import { Header } from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <FriendSelect />
      <GiftThemeGrid />
      <YellowBanner />
      <GiftRankingFilter />
      <RankingGrid />
    </>
  );
};

export default Home;
