export const rankingTargetCategory = [
  {
    image: "ALL",
    name: "전체",
    targetType: "ALL",
  },
  {
    image: "👩🏻",
    name: "여성이",
    targetType: "FEMALE",
  },
  {
    image: "👨🏻",
    name: "남성이",
    targetType: "MALE",
  },
  {
    image: "👦🏻",
    name: "청소년이",
    targetType: "TEEN",
  },
] as const;

export const rankingRankCategoryList = {
  MANY_WISH: "받고 싶어한",
  MANY_RECEIVE: "많이 선물한",
  MANY_WISH_RECEIVE: "위시로 받은",
} as const;
