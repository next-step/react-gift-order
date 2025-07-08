import type { Order } from "@/types";
import type { Register } from "@/types/form-register-type";
import type { ValidationErrors } from "@/utils/type";
import type { ChangeEvent, FormEvent } from "react";

export interface OrderStateContextType {
  order: Order;
  setOrder: (
    newValues: Partial<Order> | ((prev: Order) => Partial<Order>),
  ) => void;
  resetOrder: () => void;
}

export interface OrderFormContextType {
  errors: ValidationErrors<Order>;
  touched: Record<keyof Order, boolean>;
  register: Register<Order>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  validateAllFields: () => boolean;
}

export interface OrderCalculationContextType {
  totalPrice: number;
}

export interface OrderValidationContextType {
  isOrderComplete: () => boolean;
  getValidationErrors: () => string[];
}

export type OrderFormChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface CardTemplateHookType {
  cardTemplate: Order["cardTemplate"];
  setCardTemplate: (template: Order["cardTemplate"]) => void;
}
