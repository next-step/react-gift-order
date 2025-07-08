import { Container } from "@/components/layout/Container";
import { OrderProvider } from "@/contexts/order/OrderContext";
import type { ComponentType } from "react";

export const withOrderProvider = (Story: ComponentType) => (
  <OrderProvider>
    <Container>
      <Story />
    </Container>
  </OrderProvider>
);
