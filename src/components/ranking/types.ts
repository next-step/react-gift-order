//label을 타입으로 먼저 정의
export const PERSON_FILTER_LABELS = [
  "전체",
  "남자가",
  "여자가",
  "청소년이",
] as const;
export type PersonFilterLabels = (typeof PERSON_FILTER_LABELS)[number];
export const BEHAVIOR_FILTER_LABELS = [
  "받고 싶어한",
  "많이 선물한",
  "위시로 받은",
] as const;
export type BehaviorFilterLabels = (typeof BEHAVIOR_FILTER_LABELS)[number];


//옵션 객체 타입
export type personFilterType = {
  label: PersonFilterLabels;
  emoji: string;
};

export type behaviorFilterType = BehaviorFilterLabels;


// props에서도 타입을 이용
export type personProps = {
  options: readonly personFilterType[];
  selected: PersonFilterLabels | null;
  onSelect: (option: PersonFilterLabels) => void;
};

export type behaviorProps = {
  options: readonly behaviorFilterType[];
  selected: BehaviorFilterLabels| null;
  onSelect: (option: BehaviorFilterLabels) => void;
};
