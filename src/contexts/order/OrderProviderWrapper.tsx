import { OrderStateProvider } from "@/contexts/order/OrderStateContext";
import { OrderFormProvider } from "@/contexts/order/OrderFormContext";
import { OrderCalculationProvider } from "@/contexts/order/OrderCalculationContext";
import { OrderValidationProvider } from "@/contexts/order/OrderValidationContext";
import type { ReactNode } from "react";

export const OrderProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <OrderStateProvider>
      <OrderFormProvider>
        <OrderCalculationProvider>
          <OrderValidationProvider>{children}</OrderValidationProvider>
        </OrderCalculationProvider>
      </OrderFormProvider>
    </OrderStateProvider>
  );
};

export const OrderProvider = OrderProviderWrapper;
