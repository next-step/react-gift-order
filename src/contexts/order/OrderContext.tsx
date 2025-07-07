import { createContext, useCallback, type ReactNode, useMemo } from "react";
import type { Order } from "@/types";
import { useForm } from "@/hooks/common/useForm";
import {
  initialState,
  orderValidationRules,
  isOrderComplete,
  getValidationErrors,
  type OrderContextType,
} from "@/contexts/order";

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

const useOrderLogic = () => {
  const {
    values: order,
    errors,
    touched,
    register,
    handleSubmit,
    reset,
    setValues: setOrder,
    validateAllFields,
  } = useForm<Order>({
    initialValues: initialState.order,
    validationRules: orderValidationRules,
    onSubmit: values => {
      console.log("Form Submitted", values);
    },
  });

  const calculateTotalPrice = useCallback(() => {
    const items = [
      {
        price: order.product?.price.sellingPrice || 0,
        quantity: order.quantity || 1,
      },
    ];
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [order.product, order.quantity]);

  const contextValue = useMemo(
    () => ({
      order,
      errors,
      touched,
      register,
      handleSubmit,
      resetOrder: reset,
      setOrder,
      isOrderComplete: () => isOrderComplete(order),
      getValidationErrors: () => getValidationErrors(errors),
      calculateTotalPrice,
      validateAllFields,
    }),
    [
      order,
      errors,
      touched,
      register,
      handleSubmit,
      reset,
      setOrder,
      calculateTotalPrice,
      validateAllFields,
    ],
  );

  return contextValue as OrderContextType;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const orderLogic = useOrderLogic();

  return (
    <OrderContext.Provider value={orderLogic}>{children}</OrderContext.Provider>
  );
};
