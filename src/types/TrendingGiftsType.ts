export type TrendingGiftsType = {
  id: number;
  name: string;
  imageURL: string;
  price: PriceInfoType;
  brandInfo: BrandInfoType;
};

type PriceInfoType = {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
};

type BrandInfoType = {
  id: number;
  name: string;
  imageURL: string;
};
