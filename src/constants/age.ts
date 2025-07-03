export const AGE_SELECT = [
  { ageType: "ALL", label: "전체", emoji: "😊" },
  { ageType: "FEMALE", label: "여성이", emoji: "👧🏻" },
  { ageType: "MALE", label: "남성이", emoji: "🧑🏻" },
  { ageType: "YOUTH", label: "청소년이", emoji: "👦🏻" },
];

export type AgeTypeTemp = (typeof AGE_SELECT)[number];
export type TargetType = AgeTypeTemp["ageType"];
