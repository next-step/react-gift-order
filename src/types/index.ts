import { tabs, filters } from '@/mock/mockData';

export interface CategoryTheme {
  themeId: number;
  name: string;
  image: string;
}

export interface PriceInfo {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
}

export interface BrandInfo {
  id: number;
  name: string;
  imageURL: string;
}

export interface Product {
  id: number;
  name: string;
  imageURL: string;
  price: PriceInfo;
  brandInfo: BrandInfo;
}
export type Tab = (typeof tabs)[number];
export type TabId = (typeof tabs)[number]['id'];

export type Filter = (typeof filters)[number];
export type FilterId = (typeof filters)[number]['id'];

export type CardItem = {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
};
