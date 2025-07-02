export const RANK_SELECT = [
  { rankType: "MANY_WISH", label: "받고 싶어한" },
  { rankType: "MANY_RECEIVE", label: "많이 선물한" },
  { rankType: "MANY_WISH_RECEIVE", label: "위시로 받은" },
] as const;

export type RankTypeTemp = (typeof RANK_SELECT)[number];
export type RankType = RankTypeTemp["rankType"];
