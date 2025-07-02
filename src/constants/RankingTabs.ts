export const tabs = [
  { label: '받고 싶어한', value: 'wish' },
  { label: '많이 선물한', value: 'sent' },
  { label: '위시로 받은', value: 'wishlist' },
] as const;

export type TabValue = (typeof tabs)[number]['value'];
