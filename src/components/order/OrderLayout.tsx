import styled from "@emotion/styled";
import type { ReactNode } from "react";

const OrderWrapper = styled.main(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  backgroundColor: `${theme.color.gray[0]}`,
  height: "calc(100dvh-44px)",
  paddingBottom: "50px",
}));

export const OrderLayout = ({ children }: { children: ReactNode }) => {
  return <OrderWrapper>{children}</OrderWrapper>;
};
