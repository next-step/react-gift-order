export const TRENDING_GIFTS_TABS = [
  {
    NAME: "전체",
    ICON: "ALL",
  },
  {
    NAME: "여성이",
    ICON: "👩🏻",
  },
  {
    NAME: "남성이",
    ICON: "👨🏻",
  },
  {
    NAME: "청소년이",
    ICON: "👦🏻",
  },
] as const;

export const TRENDING_GIFTS_SUB_TABS = [
  "받고 싶어한",
  "많이 선물한",
  "위시로 받은",
] as const;

export const TRENDING_GIFTS_LABELS = {
  SECTION_TITLE: "실시간 급상승 선물랭킹",
  MORE_INFO: "더보기",
} as const;

export const TRENDING_GIFTS_STORAGE_KEYS = {
  MAIN_TAB: "mainTab",
  SUB_TAB: "subTab",
} as const;
