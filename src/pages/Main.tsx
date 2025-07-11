import Banner from '@/components/banner/Banner';
import Category from '@/components/category/Category';
import { PaddingLg, PaddingMd } from '@/components/common/Padding';
import FriendsBox from '@/components/friendsbox/FriendsBox';
import Navbar from '@/components/navbar/Navbar';
import Ranking from '@/components/ranking/Ranking';

const Main = () => {
  return (
    <>
      <Navbar />
      <FriendsBox />
      <PaddingMd />
      <Category />
      <PaddingMd />
      <Banner />
      <PaddingLg />
      <Ranking />
    </>
  );
};

export default Main;
