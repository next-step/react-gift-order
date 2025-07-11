import type { Error } from '@/types/error';
import type { ProductInfo } from '@/types/productInfo';
import type { RecipientInfo } from '@/types/recipientInfo';
import type { SenderInfo } from '@/types/senderInfo';
import { createContext } from 'react';
import type { UseFormGetValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface RecipientForm {
  recipientName: string;
  phoneNumber: string;
}

type FormValues = {
  recipientInfo: RecipientForm[];
};

type Form = {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  getValues: UseFormGetValues<FormValues>;
};
interface OrderInfoContextType {
  isFirstTry: boolean;
  setIsFirstTry: React.Dispatch<React.SetStateAction<boolean>>;
  form: Form;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sender: SenderInfo;
  recipient: RecipientInfo;
  product: ProductInfo;
  error: Error;
}

export const OrderInfoContext = createContext<OrderInfoContextType | null>(null);
