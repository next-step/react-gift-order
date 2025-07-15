import GiftThemeSection from '@/components/GiftTheme';
import Banner from '@/components/Banner';
import GiftRankingSection from '@/components/GiftRanking/GiftRankingSection';
import FriendSelectBox from '@/components/FriendSelectBox';
import { useLogin } from '@/contexts/LoginContext';

const HomePage = () => {
  const { isLoggedIn, userId } = useLogin();
  return (
    <>
      <FriendSelectBox isLoggedIn={isLoggedIn} userId={userId} />
      <GiftThemeSection />
      <Banner />
      <GiftRankingSection />
    </>
  );
};

export default HomePage;
