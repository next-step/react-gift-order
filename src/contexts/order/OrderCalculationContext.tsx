import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useOrderState } from "@/contexts/order/OrderStateContext";
import type { OrderCalculationContextType } from "@/contexts/order/types";

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
    if (!order.product || !order.receivers || order.receivers.length === 0) {
      return 0;
    }

    const productPrice = order.product.price.sellingPrice || 0;

    const totalQuantity = order.receivers.reduce((total, receiver) => {
      return total + (receiver.quantity || 0);
    }, 0);

    return productPrice * totalQuantity;
  }, [order.product, order.receivers]);

  const calculateTotalQuantity = useCallback(() => {
    if (!order.receivers || order.receivers.length === 0) {
      return 0;
    }

    return order.receivers.reduce((total, receiver) => {
      return total + (receiver.quantity || 0);
    }, 0);
  }, [order.receivers]);

  const totalPrice = calculateTotalPrice();
  const totalQuantity = calculateTotalQuantity();

  return (
    <OrderCalculationContext.Provider
      value={{
        totalPrice,
        totalQuantity,
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
