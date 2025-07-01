export const RANKING_TABS = [
  "받고 싶어한",
  "많이 선물한",
  "위시로 받은",
] as const;

export type TabType = (typeof RANKING_TABS)[number];

export const GENDER_FILTERS = ["ALL", "여성", "남성", "청소년"] as const;
export type GenderType = (typeof GENDER_FILTERS)[number];
