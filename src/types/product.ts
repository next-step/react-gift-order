// 선물 테마 아이템 인터페이스
export interface ThemeItem {
  themeId: number;
  name: string;
  image: string;
}

// 상품 가격 정보 인터페이스
export interface PriceInfo {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
}

// 브랜드 정보 인터페이스
export interface BrandInfo {
  id: number;
  name: string;
  imageURL: string;
}

// 상품 정보 인터페이스
export interface Product {
  id: number;
  name: string;
  imageURL: string;
  price: PriceInfo;
  brandInfo: BrandInfo;
}
