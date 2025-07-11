import React from "react";
import OrderForm from "../components/OrderForm";

const OrderPage: React.FC = () => {
  return (
    <div style={{ background: "#fafbfc", minHeight: "100vh", padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32, fontWeight: "bold" }}>
        주문하기
      </h2>
      <OrderForm />
    </div>
  );
};

export default OrderPage; 