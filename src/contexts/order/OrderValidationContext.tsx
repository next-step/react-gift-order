import { createContext, useContext, useCallback, type ReactNode } from "react";
import { isOrderComplete, getValidationErrors } from "@/contexts/order";
import { useOrderState } from "./OrderStateContext";
import { useOrderForm } from "./OrderFormContext";
import type { OrderValidationContextType } from "./types";

const OrderValidationContext = createContext<
  OrderValidationContextType | undefined
>(undefined);

export const OrderValidationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { order } = useOrderState();
  const { errors } = useOrderForm();

  const checkIsOrderComplete = useCallback(() => {
    return isOrderComplete(order);
  }, [order]);

  const getOrderValidationErrors = useCallback(() => {
    return getValidationErrors(errors);
  }, [errors]);

  return (
    <OrderValidationContext.Provider
      value={{
        isOrderComplete: checkIsOrderComplete,
        getValidationErrors: getOrderValidationErrors,
      }}
    >
      {children}
    </OrderValidationContext.Provider>
  );
};

export const useOrderValidation = () => {
  const context = useContext(OrderValidationContext);
  if (!context) {
    throw new Error(
      "useOrderValidation은 OrderValidationProvider 안에서 사용되어야 합니다.",
    );
  }
  return context;
};
