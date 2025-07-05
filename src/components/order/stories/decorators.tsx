import { Container } from "@/components/layout/Container";
import { OrderProvider } from "@/contexts/order/OrderContext";
import React from "react";

export const withOrderProvider = (Story: React.ComponentType) => (
  <OrderProvider>
    <Container>
      <Story />
    </Container>
  </OrderProvider>
);
