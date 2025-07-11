import type { OrderFormValues } from "@/validations/orderSchema";

export const calculateTotalQuantity = (
  receivers: OrderFormValues["receivers"]
) => {
  return receivers.reduce((sum, r) => sum + (r.quantity ?? 0), 0);
};