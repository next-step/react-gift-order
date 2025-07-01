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
export type TabId = 'all' | 'female' | 'male' | 'teen';
export interface Tab {
  id: TabId;
  label: string;
  icon?: string;
}

export type FilterId = 'wanted' | 'gifted' | 'wished';
export interface Filter {
  id: FilterId;
  label: string;
}
