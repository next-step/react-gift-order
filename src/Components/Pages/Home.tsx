import Layout from '@/Components/Layout/Layout';
import NavigationBar from '@/Components/NavigationBar/NavigationBar';
import SelectFriend from '@/Components/Section/SelectFriend';
import GiftCategoryList from '@/Components/Category/GiftCategoryList';
import Banner from '@/Components/Section/Banner';
import GiftGrid from '@/Components/GiftRanking/GiftGrid';
import GiftItem from '@/Components/GiftRanking/GiftItem';
import Filter from '@/Components/Filter/Filter';

function Home() {
  return (
    <Layout>
      <NavigationBar />
      <SelectFriend />
      <GiftCategoryList />
      <Banner />
      <Filter />
      <GiftGrid />
      <GiftItem
        rank={1}
        name="BBQ 양념치킨+콜라"
        imageURL="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
        price={29000}
        brand="BBQ"
      />
    </Layout>
  );
}

export default Home;
