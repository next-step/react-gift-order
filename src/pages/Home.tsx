import { FriendSelect } from '../components/FriendSelect';
import { Header } from '../components/Header';
import { GiftThemeGrid } from '../components/GiftThemeGrid';
import { YellowBanner } from '../components/YellowBanner';
import { RankingGrid } from '../components/RankingGrid';
import GiftRankingFilter from '../components/GiftRankingFilter';

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
