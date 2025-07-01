// src/constants/ranking.ts

export const RANKING_FILTER_TYPE_KEY = 'rankingFilterType';
export const RANKING_FILTER_RANK_TYPE_KEY = 'rankingFilterRankType';

export const TARGET_TYPE = {
  ALL: 'ALL',
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  TEENAGER: 'TEENAGER',
} as const;

export const RANK_TYPE = {
  MANY_WISH: 'MANY_WISH',
  MANY_GIFT: 'MANY_GIFT',
  MANY_RECEIVE: 'MANY_RECEIVE',
} as const;
