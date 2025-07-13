import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { isOrderComplete } from "@/contexts/order";
import { useOrderState } from "@/contexts/order/OrderStateContext";
import { useOrderForm } from "@/contexts/order/OrderFormContext";
import type { OrderValidationContextType } from "@/contexts/order/types";

const OrderValidationContext = createContext<
  OrderValidationContextType | undefined
>(undefined);

export const OrderValidationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { order } = useOrderState();
  const { errors, isValid } = useOrderForm();

  const checkIsOrderComplete = useCallback(() => {
    return isOrderComplete(order);
  }, [order]);

  const getOrderValidationErrors = useCallback(() => {
    return Object.values(errors)
      .filter(Boolean)
      .map(error => error.message)
      .filter(
        (message): message is string =>
          typeof message === "string" && message.length > 0,
      );
  }, [errors]);

  const contextValue = useMemo(
    () => ({
      isOrderComplete: checkIsOrderComplete,
      getValidationErrors: getOrderValidationErrors,
      isFormValid: isValid,
    }),
    [checkIsOrderComplete, getOrderValidationErrors, isValid],
  );

  return (
    <OrderValidationContext.Provider value={contextValue}>
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
