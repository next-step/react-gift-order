export interface Error {
  setTargetMessage: React.Dispatch<React.SetStateAction<string>>;
  messageError: string;
  setTargetSenderName: React.Dispatch<React.SetStateAction<string>>;
  senderNameError: string;
  setTargetRecipientName: React.Dispatch<React.SetStateAction<string>>;
  recipientNameError: string;
  setTargetPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  phoneNumberError: string;
  setTargetAmount: React.Dispatch<React.SetStateAction<string>>;
  amountError: string;
}
