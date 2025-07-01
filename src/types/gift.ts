export type GiftPrice = {
  basicPrice: number;
  discountRate: number;
  sellingPrice: number;
};

export type BrandInfo = {
  id: number;
  name: string;
  imageURL: string;
};

export type GiftItem = {
  id: number;
  name: string;
  imageURL: string;
  price: GiftPrice;
  brandInfo: BrandInfo;
};
