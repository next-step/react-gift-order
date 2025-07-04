export const generations = [
  { id: 'ALL', emoji: 'ALL', label: '전체' },
  { id: 'FEMALE', emoji: '👩🏻', label: '여성이' },
  { id: 'MALE', emoji: '👨🏻', label: '남성이' },
  { id: 'TEEN', emoji: '👦🏻', label: '청소년이' },
] as const;

export const filters = [
  { id: 'MANY_WISH', label: '받고 싶어한' },
  { id: 'MANY_RECEIVE', label: '많이 선물한' },
  { id: 'MANY_WISH_RECEIVE', label: '위시로 받은' },
] as const;
