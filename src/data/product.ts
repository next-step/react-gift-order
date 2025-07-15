export interface Product {
  id: number;
  name: string;
  imageURL: string;
  price: {
    sellingPrice: number;
  };
  brandInfo: {
    name: string;
    id: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
    imageURL:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    price: {
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: 'BBQ',
    },
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
    imageURL:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    price: {
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: 'BBQ',
    },
  },
  {
    id: 3,
    name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
    imageURL:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    price: {
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: 'BBQ',
    },
  },
  {
    id: 4,
    name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
    imageURL:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    price: {
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: 'BBQ',
    },
  },
  {
    id: 5,
    name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
    imageURL:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    price: {
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: 'BBQ',
    },
  },
  {
    id: 6,
    name: 'BBQ 양념치킨+크림치즈볼+콜라 1.25L',
    imageURL:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    price: {
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: 'BBQ',
    },
  },
];
