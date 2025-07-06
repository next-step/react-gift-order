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

interface OrderInfoContextType {
  sender: SenderInfo;
  recipient: RecipientInfo;
  product: ProductInfo;
}

export const OrderInfoContext = createContext<OrderInfoContextType | null>(null);
