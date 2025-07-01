/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import { FriendSelectBar } from '@/components/FriendSelectBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { Banner } from '@/components/Banner';
import {
  RankingTabs,
  type GenderFilter,
  type SortFilter,
} from '@/components/RankingTabs';
import { RankingGrid } from '@/components/RankingGrid';

import {
  rankingAll,
  rankingFemale,
  rankingMale,
  rankingTeen,
} from '@/data/rankings';

type RankingItem = (typeof rankingAll)[number];

export const GiftPage = () => {
  const [gender, setGender] = useState<GenderFilter>('ALL');
  const [sort, setSort] = useState<SortFilter>('GIVE');

  const handleTab = (g: GenderFilter, s: SortFilter) => {
    setGender(g);
    setSort(s);
  };

  const base: RankingItem[] =
    gender === 'FEMALE'
      ? rankingFemale
      : gender === 'MALE'
      ? rankingMale
      : gender === 'TEEN'
      ? rankingTeen
      : rankingAll;

  // const sortFieldMap: Record<SortFilter, keyof RankingItem> = {
  //   GIVE: 'give',       
  //   WANT: 'want',       
  //   RECEIVE: 'receive', 
  // };
  // const key = sortFieldMap[sort];

  // const list = [...base].sort((a, b) => Number(b[key]) - Number(a[key]));

  return (
    <Layout>
      <NavBar />
      <FriendSelectBar />
      <CategoryGrid />
      <Banner />
      <RankingTabs onChange={handleTab} />
      {/* <RankingGrid items={list} /> */}
    </Layout>
  );
};

export default GiftPage;
