import type { Order } from "@/types";
import type {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  UseFormHandleSubmit,
  Control,
  UseFormTrigger,
  UseFormStateReturn,
  UseFormGetFieldState,
} from "react-hook-form";
import type { OrderFormData } from "@/contexts/order";

export interface OrderStateContextType {
  order: Order;
  setOrder: (
    newValues: Partial<Order> | ((prev: Order) => Partial<Order>),
  ) => void;
  resetOrder: () => void;
}

export interface OrderFormContextType {
  errors: FieldErrors<OrderFormData>;
  touched: FieldNamesMarkedBoolean<OrderFormData>;
  register: UseFormRegister<OrderFormData>;
  handleSubmit: UseFormHandleSubmit<OrderFormData>;
  validateAllFields: () => Promise<boolean>;
  setValue: UseFormSetValue<OrderFormData>;
  watch: UseFormWatch<OrderFormData>;
  control: Control<OrderFormData>;
  isValid: boolean;
  trigger: UseFormTrigger<OrderFormData>;
  formState: UseFormStateReturn<OrderFormData>;
  getFieldState: UseFormGetFieldState<OrderFormData>;
}

export interface OrderCalculationContextType {
  totalPrice: number;
  totalQuantity: number;
}

export interface OrderValidationContextType {
  isOrderComplete: () => boolean;
  getValidationErrors: () => string[];
}

export interface CardTemplateHookType {
  cardTemplate: Order["cardTemplate"];
  setCardTemplate: (template: Order["cardTemplate"]) => void;
}
