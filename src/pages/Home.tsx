import Layout from '@/components/layout/Layout';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import SelectFriend from '@/components/section/SelectFriend';
import GiftCategoryList from '@/components/category/GiftCategoryList';
import Banner from '@/components/section/Banner';
import GiftGrid from '@/components/gift-ranking/GiftGrid';
import Filter from '@/components/filter/Filter';

function Home() {
  return (
    <Layout>
      <NavigationBar />
      <SelectFriend />
      <GiftCategoryList />
      <Banner />
      <Filter />
      <GiftGrid />
    </Layout>
  );
}

export default Home;
