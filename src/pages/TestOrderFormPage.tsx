//AI를 활용하여 만든 임시 test 화면입니다.

import { OrderForm } from "@/components/order/OrderForm";
import { useOrderForm } from "@/components/order/useOrderForm";

const TestOrderFormPage = () => {
  const {
    form,
    isFormValid,
    //setField,
    errors,
  } = useOrderForm();

  return (
    <div style={{ padding: "2rem", maxWidth: 480, margin: "0 auto" }}>
      <h1>🧪 주문 폼 테스트</h1>
      <OrderForm />

      <div style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        <h2>현재 폼 상태</h2>
        <pre>{JSON.stringify(form, null, 2)}</pre>

        <h2>에러 메시지</h2>
        <pre>{JSON.stringify(errors, null, 2)}</pre>

        <p>폼 유효성: {isFormValid ? "✅ 유효함" : "❌ 유효하지 않음"}</p>
      </div>
    </div>
  );
};

export default TestOrderFormPage;
