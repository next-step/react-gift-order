import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Order } from "@/types";
import { initialState } from "@/contexts/order";
import type { OrderStateContextType } from "./types";

const OrderStateContext = createContext<OrderStateContextType | undefined>(
  undefined,
);

export const OrderStateProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrderState] = useState<Order>(initialState.order);

  const setOrder = useCallback(
    (newValues: Partial<Order> | ((prev: Order) => Partial<Order>)) => {
      setOrderState(prev => {
        if (typeof newValues === "function") {
          const partialUpdate = newValues(prev);
          return { ...prev, ...partialUpdate };
        }
        return { ...prev, ...newValues };
      });
    },
    [],
  );

  const resetOrder = useCallback(() => {
    setOrderState(initialState.order);
  }, []);

  return (
    <OrderStateContext.Provider value={{ order, setOrder, resetOrder }}>
      {children}
    </OrderStateContext.Provider>
  );
};

export const useOrderState = () => {
  const context = useContext(OrderStateContext);
  if (!context) {
    throw new Error(
      "useOrderState는 OrderStateProvider 안에서 사용되어야 합니다.",
    );
  }
  return context;
};
