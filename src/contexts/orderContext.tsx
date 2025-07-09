import { createContext, useContext, type ReactNode } from "react";
import useOrder, { type UseOrderType, type OrderErrorType } from "../hooks/useOrder";

type OrderContextType = {
  formData: UseOrderType;
  onChangeOrder: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  setOrderMessage: (message: string) => void;
  selectCard: (cardId: number) => void;
  setProduct: (productId: number) => void;
  errorMsg: OrderErrorType;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
};
type OrderProviderProps = {
  children: ReactNode;
  initialValue?: UseOrderType;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children, initialValue }: OrderProviderProps) => {
  const order = useOrder(initialValue);

  return <OrderContext value={order}>{children}</OrderContext>;
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) throw new Error("OrderProvider 안에서 사용해야함");
  return context;
};
