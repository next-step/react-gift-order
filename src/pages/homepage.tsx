// src/pages/HomePage.tsx
import FriendSelectSection from '@/components/home/FriendSelectSection';
import CategorySection from '@/components/home/CategorySection';
import BannerSection from '@/components/home/BannerSection';
import GiftRankingGrid from '@/components/GiftRanking/GiftRankingGrid';

const HomePage = () => {
  return (
    <>
      <FriendSelectSection />
      <CategorySection />
      <BannerSection />
      <GiftRankingGrid />
    </>
  );
};

export default HomePage;
