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

  const genderMap: Record<GenderFilter, RankingItem[]> = {
    ALL: rankingAll,
    FEMALE: rankingFemale,
    MALE: rankingMale,
    TEEN: rankingTeen,
  };

  const base = genderMap[gender];
  
  type RankField = 'give' | 'want' | 'receive';
  type RankStatItem = RankingItem & Record<RankField, number>; 

  const sortFieldMap: Record<SortFilter, RankField> = {
    GIVE: 'give',
    WANT: 'want',
    RECEIVE: 'receive',
  };
  const key = sortFieldMap[sort];

  const list = ([...base] as RankStatItem[]).sort(
    (a, b) => b[key] - a[key]
  );


  return (
    <Layout>
      <NavBar />
      <FriendSelectBar />
      <CategoryGrid />
      <Banner />
      <RankingTabs gender={gender} sort={sort} onChange={handleTab}/>
      <RankingGrid items={list} />
    </Layout>
  );
};

export default GiftPage;
