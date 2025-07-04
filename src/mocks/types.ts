export interface Product {
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

export interface MessageCard {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}
