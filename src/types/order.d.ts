export type OrderFormKey = keyof OrderForm;
export type OrderFormErrors = Partial<Record<OrderFormKey, string>>;

export interface OrderForm {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhoneNumber: string;
  quantity: number;
}

export interface CardTemplate {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}
