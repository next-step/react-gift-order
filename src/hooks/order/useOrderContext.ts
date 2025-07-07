import { useContext } from "react";
import { OrderContext } from "@/contexts/order/OrderContext";
import type { OrderContextType } from "@/contexts/order";

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder가 OrderProvider 안에서 사용되고 있지 않습니다.");
  }
  return context as OrderContextType;
};
