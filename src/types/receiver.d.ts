export type Receiver = {
  name: string;
  phone: string;
  count: number;
};

export type FormValues = {
  modalReceiver: Receiver[];
  receiver: Receiver[];
};

export type OrderFormValue = {
  message: string;
  sender: string;
  receiver: Receiver[];
};
