interface RecipientForm {
  recipientName: string;
  phoneNumber: string;
  amount: number;
}

export type FormValues = {
  message: string;
  senderName: string;
  recipientInfo: RecipientForm[];
};
