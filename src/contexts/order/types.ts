import type { Order } from "@/types";
import type { ValidationErrors } from "@/utils/type";
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export interface OrderContextType {
  order: Order;
  errors: ValidationErrors<Order>;
  touched: Record<keyof Order, boolean>;
  register: <K extends keyof Order>(
    field: K,
  ) => {
    name: K;
    value: Order[K];
    onChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Order[K],
    ) => void;
    onBlur: () => void;
    error: string | undefined;
    hasError: boolean;
  };
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  resetOrder: () => void;
  setOrder: Dispatch<SetStateAction<Order>>;
  isOrderComplete: () => boolean;
  getValidationErrors: () => string[];
  calculateTotalPrice: () => number;
}
