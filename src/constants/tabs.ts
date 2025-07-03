export const tabs = [
  "전체",
  "디지털/가전",
  "패션/잡화",
  "뷰티/향수",
  "상품권",
  "가구/인테리어",
  "스포츠/레저",
  "도서/음악/문구",
  "유아동",
  "반려동물용품",
  "꽃/식물",
] as const;

export type TabType = (typeof tabs)[number];
