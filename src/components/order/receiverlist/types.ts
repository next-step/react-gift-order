type Recevier = {
  name: string;
  phone: string;
  quantity: number;
};
export type OrderFormData = {
  cardMessage: string;
  senderName: string;
  receivers: Recevier[];
};
