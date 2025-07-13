import type { ProductType } from "./product-type";
import type { CardTemplateType } from "./card-template-type";

export interface ReceiverInfo {
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}
export interface Order {
  product: ProductType | null;
  cardTemplate: CardTemplateType | null;
  message: string;
  senderName: string;
  receivers?: ReceiverInfo[];
}
