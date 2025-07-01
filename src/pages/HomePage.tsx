import Navigation from '@/components/Navigation';
import FriendSelectSection from '@/components/FriendSelectSection';
import CategorySection from '@/components/CategorySection';
import BannerSection from '@/components/BannerSection';
import RankingGroup from '@/components/RankingSection/RankingGroup';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <FriendSelectSection />
      <CategorySection />
      <BannerSection />
      <RankingGroup />
    </>
  );
};

export default HomePage;
