export type TargetType = {
  query: string;
  label: string;
  children: string;
};

export const target = Object.freeze({
  ALL: { query: "ALL", label: "전체", children: "ReactNode:ALL" },
  FEMALE: { query: "FEMALE", label: "여성이", children: "👩🏻" },
  MALE: { query: "MALE", label: "남성이", children: "👨🏻" },
  TEEN: { query: "TEEN", label: "청소년이", children: "👦🏻" }
});

export type RankType = {
  query: string;
  label: string;
};

export const rank = Object.freeze({
  MANY_WISH: { query: "MANY_WISH", label: "받고 싶어한" },
  MANY_RECEIVE: { query: "MANY_RECEIVE", label: "많이 선물한" },
  MANY_WISH_RECEIVE: { query: "MANY_WISH_RECEIVE", label: "위시로 받은" }
});
