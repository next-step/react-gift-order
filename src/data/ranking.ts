export interface RankingItem {
  id: number;
  name: string;
  imageURL: string;
  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

//리뷰2 고정적으로 사용하는 데이터를 컴포넌트에서 빼서 사용 
export interface GenderItems {
  key: string;
  icon: string;
  label: string;
}

export const genderItems: GenderItems[] = [
  { key: 'ALL', icon: 'ALL', label: '전체' },
  { key: '여성이', icon: '👩🏻', label: '여성이' },
  { key: '남성이', icon: '👨🏻', label: '남성이' },
  { key: '청소년이', icon: '👦🏻', label: '청소년이' }
];

export type ActionItem = string;
export const actionItems: ActionItem[] = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const mockRankingItem = (index: number): RankingItem => ({
  id: 123 + index,
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
});

// 리뷰3 Array.fill()얕은복사에서 Array.from()으로 독립적인 개체를 만들었습니다. 
export const rankingItems: RankingItem[] = Array.from({ length: 21 }, (_, index) => mockRankingItem(index)); 