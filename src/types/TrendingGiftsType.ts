export interface TrendingGiftsType {
  id: number;
  name: string;
  imageURL: string;
  price: PriceInfoType;
  brandInfo: BrandInfoType;
}

interface PriceInfoType {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
}

interface BrandInfoType {
  id: number;
  name: string;
  imageURL: string;
}
