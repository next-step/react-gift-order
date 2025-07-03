export const sortOptions = ["받고 싶어한", "선물 받은", "선물 보낸"] as const;

// `sortOptions` 배열의 각 원소 타입을 유니온 타입으로 추출
export type SortOptionType = (typeof sortOptions)[number];
