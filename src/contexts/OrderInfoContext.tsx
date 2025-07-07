import { createContext } from 'react';

interface SenderInfo {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

interface RecipientInfo {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

interface ProductInfo {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

interface Error {
  setTargetMessage: React.Dispatch<React.SetStateAction<string>>;
  messageError: string;
  setTargetSenderName: React.Dispatch<React.SetStateAction<string>>;
  senderNameError: string;
  setTargetRecipientName: React.Dispatch<React.SetStateAction<string>>;
  recipientNameError: string;
  setTargetPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  phoneNumberError: string;
  setTargetAmount: React.Dispatch<React.SetStateAction<number>>;
  amountError: string;
}

interface OrderInfoContextType {
  isFirstTry: boolean;
  setIsFirstTry: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sender: SenderInfo;
  recipient: RecipientInfo;
  product: ProductInfo;
  error: Error;
}

export const OrderInfoContext = createContext<OrderInfoContextType | null>(null);
