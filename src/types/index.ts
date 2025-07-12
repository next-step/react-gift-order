export interface GiftTheme {
  themeId: number;
  name: string;
  image: string;
}

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

export interface NavigationState {
  from?: string;
}

export type TargetFilter = '전체' | '여성이' | '남성이' | '청소년이';
export type CategoryFilter = '받고 싶어한' | '많이 선물한' | '위시로 받은';

export interface MessageCardTemplate {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

export interface GiftOrderForm {
  message: string;
  senderName: string;
  recipientName: string;
  recipientPhone: string;
  quantity: number;
  selectedTemplate: MessageCardTemplate;
  [key: string]: unknown;
}

export type Recipient = { name: string; phone: string; quantity: number };
export type RecipientsForm = { recipients: Recipient[] };
