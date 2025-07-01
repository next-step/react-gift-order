import GiftThema from '@/components/GiftThema/GiftThema.tsx';
import GiftRanking from '@/components/GiftRanking/GiftRanking.tsx';
import Header from '@/components/Header/Header';
import ChooseFriend from '@/components/ChooseFriend/ChooseFriend.tsx';

const Home = () => {

  return (
    <div>
      <Header />
      <ChooseFriend />
      <GiftThema />
      <GiftRanking />
    </div>
  )
}

export default Home;