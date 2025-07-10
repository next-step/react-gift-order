import type { Error } from '@/types/error';
import type { ProductInfo } from '@/types/productInfo';
import type { RecipientInfo } from '@/types/recipientInfo';
import type { SenderInfo } from '@/types/senderInfo';
import { createContext } from 'react';

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
