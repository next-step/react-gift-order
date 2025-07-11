import { Container } from "@/components/layout/Container";
import { OrderProviderWrapper } from "@/contexts/order";
import type { ComponentType } from "react";

export const withOrderProvider = (Story: ComponentType) => (
  <OrderProviderWrapper>
    <Container>
      <Story />
    </Container>
  </OrderProviderWrapper>
);
