import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useOrderState } from "./OrderStateContext";
import type { OrderCalculationContextType } from "./types";

const OrderCalculationContext = createContext<
  OrderCalculationContextType | undefined
>(undefined);

export const OrderCalculationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { order } = useOrderState();

  const calculateTotalPrice = useCallback(() => {
    const items = [
      {
        price: order.product?.price.sellingPrice || 0,
        quantity: order.quantity || 1,
      },
    ];
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [order.product, order.quantity]);

  const totalPrice = calculateTotalPrice();

  return (
    <OrderCalculationContext.Provider
      value={{
        totalPrice,
      }}
    >
      {children}
    </OrderCalculationContext.Provider>
  );
};

export const useOrderCalculation = () => {
  const context = useContext(OrderCalculationContext);
  if (!context) {
    throw new Error(
      "useOrderCalculation은 OrderCalculationProvider 안에서 사용되어야 합니다.",
    );
  }
  return context;
};
