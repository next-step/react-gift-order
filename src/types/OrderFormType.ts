export type OrderFormType = {
  sender: string;
  recipients: RecipientType[];
  message: string;
  cardId: number;
  productId: number;
};

type RecipientType = {
  name: string;
  phone: string;
  quantity: number;
};
