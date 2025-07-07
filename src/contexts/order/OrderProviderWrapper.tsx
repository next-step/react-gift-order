import type { ReactNode } from "react";
import { OrderStateProvider } from "./OrderStateContext";
import { OrderFormProvider } from "./OrderFormContext";
import { OrderCalculationProvider } from "./OrderCalculationContext";
import { OrderValidationProvider } from "./OrderValidationContext";

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
