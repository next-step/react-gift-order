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

export interface ProductType {
  id: number;
  name: string;
  imageURL: string;
  price: PriceInfo;
  brandInfo: BrandInfo;
}
