import React from "react";
import OrderSubmitBar from "@/components/layout/OrderLayout/OrderSubmitBar";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ paddingBottom: "80px" }}>
      {children}
      <OrderSubmitBar />
    </div>
  );
}
