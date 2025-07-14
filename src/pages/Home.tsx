import CategorySection from '@components/HomePage/CategorySection';
import PromoBanner from '@components/HomePage/PromoBanner';
import RankingSection from '@components/HomePage/RankingSection';
import FreiendSelector from '@components/HomePage/FriendSelector';

const Home = () => {
  return (
    <>
      <FreiendSelector />
      <CategorySection />
      <PromoBanner />
      <RankingSection />
    </>
  );
};

export default Home;
