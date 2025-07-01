//Package for mock test, must be removed on api implementation stage
import { v4 } from "uuid";

type BrandInfo = {
  id: number;
  name: string;
  imageURL: string;
};

type Price = {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
};

export type Product = {
  uuid: string; //uuid for mock test, must be removed on api implementation stage
  id: number;
  name: string;
  imageURL: string;
  price: Price;
  brandInfo: BrandInfo;
};

export const productMockData = {
  id: 123,
  name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
  imageURL:
    "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000
  },
  brandInfo: {
    id: 2088,
    name: "BBQ",
    imageURL:
      "https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png"
  }
} as const;

export function getProductMockData(count: number) {
  const mockList = Array.from({ length: count }, () => ({
    ...productMockData,
    uuid: v4()
  }));
  return mockList;
}

export function simulatePagenation(page: number) {
  const PRODUCTS_PER_PAGE = 21;
  const VIRTUAL_PRODUCTS_COUNT = 50;
  if (PRODUCTS_PER_PAGE * page <= VIRTUAL_PRODUCTS_COUNT) {
    // non-last page
    return getProductMockData(PRODUCTS_PER_PAGE);
  } else {
    // last page
    const leftOver = VIRTUAL_PRODUCTS_COUNT - PRODUCTS_PER_PAGE * (page - 1);
    return getProductMockData(leftOver);
  }
}
