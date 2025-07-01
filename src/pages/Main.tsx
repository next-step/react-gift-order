import Banner from '@/components/banner/Banner';
import Category from '@/components/category/Category';
import FriendsBox from '@/components/friendsbox/FriendsBox';
import Navbar from '@/components/navbar/Navbar';
import { PaddingLg, PaddingMd } from '@/components/padding/Padding';
import Ranking from '@/components/ranking/Ranking';
import React from 'react'

const Main = () => {
  return (
    <>
      <Navbar/>
      <FriendsBox />
      <PaddingMd />
      <Category />
      <PaddingMd />
      <Banner />
      <PaddingLg />
      <Ranking />
    </>
  );
}

export default Main
