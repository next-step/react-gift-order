import type { ReactNode } from "react";
import { OrderStateProvider } from "@/contexts/order/OrderStateContext";
import { OrderFormProvider } from "@/contexts/order/OrderFormContext";
import { OrderCalculationProvider } from "@/contexts/order/OrderCalculationContext";
import { OrderValidationProvider } from "@/contexts/order/OrderValidationContext";

interface OrderProviderWrapperProps {
  children: ReactNode;
}

export const OrderProviderWrapper = ({
  children,
}: OrderProviderWrapperProps) => {
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
