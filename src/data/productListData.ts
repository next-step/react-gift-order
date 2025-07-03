import type { Product } from "../types/common";

export const productListData: Product[] = [
  {
    id: 1,
    name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
    price: {
      basicPrice: 29000,
      discountRate: 0,
      sellingPrice: 29000,
    },
    brandInfo: {
      id: 2088,
      name: "BBQ",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 2,
    name: "BHC 뿌링클+치즈볼+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg", // 동일 이미지 사용
    price: {
      basicPrice: 28000,
      discountRate: 0,
      sellingPrice: 28000,
    },
    brandInfo: {
      id: 2089,
      name: "BHC",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
  {
    id: 3,
    name: "교촌 허니콤보+웨지감자+콜라1.25L",
    imageURL:
      "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg", // 동일 이미지 사용
    price: {
      basicPrice: 30000,
      discountRate: 0,
      sellingPrice: 30000,
    },
    brandInfo: {
      id: 2090,
      name: "교촌치킨",
      imageURL:
        "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png",
    },
  },
];
