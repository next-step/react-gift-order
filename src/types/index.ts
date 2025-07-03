export interface Category {
  themeId: number;
  name: string;
  image: string;
}

export interface Price {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
}

export interface BrandInfo {
  id: number;
  name: string;
  imageURL: string;
}

export interface GiftItem {
  id: number;
  name: string;
  imageURL: string;
  price: Price;
  brandInfo: BrandInfo;
}

export interface RankingItem extends GiftItem {
  give: number;
  want: number;
  receive: number;
}

export type RankField = 'give' | 'want' | 'receive';