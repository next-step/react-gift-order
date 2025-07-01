import type { CategoryTheme, Product } from '@/types/index.ts';

// 실제 Mock 데이터

export const categories: CategoryTheme[] = [
  {
    themeId: 3715,
    name: '생일',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371520241125_LQBMT.png',
  },
  {
    themeId: 3714,
    name: '맛있는선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371420250401_CYHOR.png',
  },
  {
    themeId: 3713,
    name: '직장동료',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371320250107_QWGZN.png',
  },
  {
    themeId: 3712,
    name: '연인',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371220250107_YMYGC.png',
  },
  {
    themeId: 3993,
    name: 'FOR ME',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F399320250519_CMTFF.png',
  },
  {
    themeId: 3710,
    name: '가벼운선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F371020250102_QSNFV.png',
  },
  {
    themeId: 3782,
    name: '스몰럭셔리',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F378220250214_OHAQK.png',
  },
  {
    themeId: 3877,
    name: '명품선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F387720250324_SDCJQ.png',
  },
  {
    themeId: 3707,
    name: '출산・돌',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370720241228_QFZPM.png',
  },
  {
    themeId: 3697,
    name: '결혼・집들이',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F369720250126_OGWLG.png',
  },
  {
    themeId: 3704,
    name: '시원한선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370420250324_WDMHS.png',
  },
  {
    themeId: 3705,
    name: '합격・응원',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370520250127_NLVFN.png',
  },
  {
    themeId: 3706,
    name: '건강・케어',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370620250415_HENTO.png',
  },
  {
    themeId: 3703,
    name: '교환권',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370320250331_NPPCU.png',
  },
  {
    themeId: 3702,
    name: '웃긴선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F370220241228_UPSAE.png',
  },
];

const mockProduct: Product = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
};

// 랭킹용 상품들 (같은 상품을 여러 개로 복제)
export const products: Product[] = Array.from({ length: 12 }, (_, i) => ({
  ...mockProduct,
  id: mockProduct.id + i,
}));

export const tabs = [
  { id: 'all', label: '전체', icon: 'ALL' },
  { id: 'female', label: '여성이', icon: '👩' },
  { id: 'male', label: '남성이', icon: '👨' },
  { id: 'teen', label: '청소년이', icon: '🧑' },
] as const;
export type Tab = (typeof tabs)[number];
export type TabId = Tab['id'];

export const filters = [
  { id: 'wanted', label: '받고 싶어한' },
  { id: 'gifted', label: '많이 선물한' },
  { id: 'wished', label: '위시로 받은' },
] as const;
export type Filter = (typeof filters)[number];
export type FilterId = Filter['id'];
