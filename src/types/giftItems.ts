export interface GiftItemDataType {
  id: number;
  name: string;
  imageURL: string;
  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

export interface GiftCardType {
  id: number;
  image: string;
  brandName: string;
  price: number;
}
