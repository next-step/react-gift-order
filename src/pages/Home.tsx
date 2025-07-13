import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import FriendSelector from '../components/FriendSelector';
import GiftCategorySelector from '../components/GiftCategorySelector';
import RealtimeGiftRank from '../components/RealtimeGiftRank';

function Home() {
  return (
    <Layout>
      <NavBar />
      <FriendSelector />
      <GiftCategorySelector />
      <RealtimeGiftRank />
    </Layout>
  );
}

export default Home;
