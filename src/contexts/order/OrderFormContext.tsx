import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useForm, type UseFormSetValue } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderState } from "@/contexts/order/OrderStateContext";
import { orderSchema, type OrderFormData } from "@/contexts/order";
import type { OrderFormContextType } from "@/contexts/order/types";

const OrderFormContext = createContext<OrderFormContextType | undefined>(
  undefined,
);

export const OrderFormProvider = ({ children }: { children: ReactNode }) => {
  const { order, setOrder } = useOrderState();

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      product: order.product || null,
      cardTemplate: order.cardTemplate || null,
      message: order.message || "",
      senderName: order.senderName || "",
      receivers: order.receivers || [],
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    control,
    formState,
    getFieldState,
  } = form;

  const { errors, touchedFields, isValid } = formState;

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name) {
        const fieldName = name.split(".")[0] as keyof OrderFormData;
        const fieldValue = value[fieldName];

        setOrder(prev => ({
          ...prev,
          [fieldName]: fieldValue,
        }));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setOrder]);

  const setValueWithSync: UseFormSetValue<OrderFormData> = useCallback(
    (name, value, options) => {
      setValue(name, value, options);
      const rootFieldName = name.split(".")[0] as keyof OrderFormData;
      if (rootFieldName === name) {
        setOrder(prev => ({ ...prev, [name]: value }));
      }
    },
    [setValue, setOrder],
  );

  const validateAllFields = useCallback(async (): Promise<boolean> => {
    return await trigger();
  }, [trigger]);

  const contextValue = useMemo<OrderFormContextType>(
    () => ({
      errors,
      touched: touchedFields,
      register,
      handleSubmit,
      validateAllFields,
      setValue: setValueWithSync,
      control,
      watch,
      trigger,
      isValid,
      formState,
      getFieldState,
    }),
    [
      errors,
      touchedFields,
      register,
      handleSubmit,
      validateAllFields,
      setValueWithSync,
      control,
      watch,
      trigger,
      isValid,
      formState,
      getFieldState,
    ],
  );

  return (
    <OrderFormContext.Provider value={contextValue}>
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
