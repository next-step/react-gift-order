import type { Order } from "@/types";
import type { Register } from "@/types/form-register-type";
import type { ValidationErrors } from "@/utils/type";
import type { FormEvent } from "react";

export interface OrderContextType {
  order: Order;
  errors: ValidationErrors<Order>;
  touched: Record<keyof Order, boolean>;
  register: Register<Order>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  resetOrder: () => void;
  setOrder: (
    newValues: Partial<Order> | ((prev: Order) => Partial<Order>),
  ) => void;
  isOrderComplete: () => boolean;
  getValidationErrors: () => string[];
  calculateTotalPrice: () => number;
  validateAllFields: () => boolean;
}
