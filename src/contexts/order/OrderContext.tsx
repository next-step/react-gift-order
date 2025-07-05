import type { ValidationErrors } from "@/utils/type";
import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
  useMemo,
} from "react";
import type { Order } from "@/types";
import { useForm } from "@/hooks/common/useForm";
import {
  initialState,
  orderValidationRules,
  isOrderComplete,
  getValidationErrors,
} from "@/contexts/order";

interface OrderContextType {
  order: Order;
  errors: ValidationErrors<Order>;
  touched: Record<keyof Order, boolean>;
  register: <K extends keyof Order>(
    field: K,
  ) => {
    name: K;
    value: Order[K];
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Order[K],
    ) => void;
    onBlur: () => void;
    error: string | undefined;
    hasError: boolean;
  };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetOrder: () => void;
  setOrder: (
    newValues: Partial<Order> | ((prev: Order) => Partial<Order>),
  ) => void;
  isOrderComplete: () => boolean;
  getValidationErrors: () => string[];
  calculateTotalPrice: () => number;
  validateAllFields: () => boolean;
}

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

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder가 OrderProvider 안에서 사용되고 있지 않습니다.");
  }
  return context as OrderContextType;
};
