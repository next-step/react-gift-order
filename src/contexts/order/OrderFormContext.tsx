import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Order } from "@/types";
import type { Register } from "@/types/form-register-type";
import { useForm } from "@/hooks/common/useForm";
import { orderValidationRules } from "@/contexts/order";
import { useOrderState } from "@/contexts/order";
import type {
  OrderFormContextType,
  OrderFormChangeEvent,
} from "@/contexts/order";

const OrderFormContext = createContext<OrderFormContextType | undefined>(
  undefined,
);

export const OrderFormProvider = ({ children }: { children: ReactNode }) => {
  const { order, setOrder } = useOrderState();

  const {
    errors,
    touched,
    register,
    handleSubmit,
    validateAllFields,
    setValues,
  } = useForm<Order>({
    initialValues: order,
    validationRules: orderValidationRules,
    onSubmit: values => {
      console.log("Form Submitted", values);
    },
  });

  useEffect(() => {
    setValues(order);
  }, [order, setValues]);

  const wrappedRegister = useCallback(
    <K extends keyof Order>(fieldName: K) => {
      const field = register(fieldName);
      return {
        ...field,
        onChange: (e: OrderFormChangeEvent) => {
          field.onChange(e);
          let value: Order[K];
          if (e && typeof e === "object" && "target" in e) {
            value = e.target.value as Order[K];
          } else {
            value = e as Order[K];
          }

          setOrder(prev => ({ ...prev, [fieldName]: value }));
        },
      };
    },
    [register, setOrder],
  ) as Register<Order>;

  return (
    <OrderFormContext.Provider
      value={{
        errors,
        touched,
        register: wrappedRegister,
        handleSubmit,
        validateAllFields,
      }}
    >
      {children}
    </OrderFormContext.Provider>
  );
};

export const useOrderForm = () => {
  const context = useContext(OrderFormContext);
  if (!context) {
    throw new Error(
      "useOrderForm은 OrderFormProvider 안에서 사용되어야 합니다.",
    );
  }
  return context;
};
