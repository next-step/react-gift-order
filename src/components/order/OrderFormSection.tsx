/** @jsxImportSource @emotion/react */
import { useOrderForm } from "@/components/order/useOrderForm";
import { FormField } from "@/components/order/FormField";
import { css } from "@emotion/react";

export const OrderFormSection = () => {
  const { values, updateField, errors } = useOrderForm();

  return (
    <section css={sectionStyle}>
      <h2>주문 메시지 작성</h2>

      <FormField label="메시지" error={errors.message}>
        <textarea
          id="message"
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="받는 분께 전달할 메시지를 입력하세요"
        />
      </FormField>

      <FormField label="보내는 사람" error={errors.senderName}>
        <input
          type="text"
          id="senderName"
          value={values.senderName}
          onChange={(e) => updateField("senderName", e.target.value)}
          placeholder="보내는 사람 이름"
        />
      </FormField>

      <FormField label="받는 사람" error={errors.receiverName}>
        <input
          type="text"
          id="receiverName"
          value={values.receiverName}
          onChange={(e) => updateField("receiverName", e.target.value)}
          placeholder="받는 사람 이름"
        />
      </FormField>

      <FormField label="전화번호" error={errors.receiverPhone}>
        <input
          type="tel"
          id="receiverPhone"
          value={values.receiverPhone}
          onChange={(e) => updateField("receiverPhone", e.target.value)}
          placeholder="01012345678"
        />
      </FormField>

      <FormField label="수량" error={errors.quantity}>
        <input
          type="number"
          id="quantity"
          min={1}
          value={values.quantity}
          onChange={(e) => updateField("quantity", Number(e.target.value))}
          placeholder="수량을 입력하세요"
        />
      </FormField>
    </section>
  );
};

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;
