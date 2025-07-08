import type { ProductType } from "./product-type";
import type { CardTemplateType } from "./card-template-type";

export interface Order {
  product: ProductType | null;
  cardTemplate: CardTemplateType | null;
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
}
