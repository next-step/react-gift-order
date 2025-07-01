import NavigationBar from '@/components/NavigationBar';
import RecieverSelectBox from '@/components/RecieverSelectBox';
import GiftThemeSection from '@/components/GiftTheme';
import Banner from '@/components/Banner';
import GiftRankingSection from '@/components/GiftRanking/GiftRankingSection';

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <RecieverSelectBox />
      <GiftThemeSection />
      <Banner />
      <GiftRankingSection />
    </>
  );
};

export default HomePage;