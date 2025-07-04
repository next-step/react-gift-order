/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MessageCardSection from "./MessageCardSection";
import SenderInfoSection from "./SenderInfoSection";
import ReceiverInfoSection from "./RecieverSection";
import ProductSummarySection from "./ProductSummarySection";
import useOrderValidation from "../../hooks/useOrderValidation";
import OrderButton from "../../components/common/BaseButton";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const messageRef = useRef<HTMLTextAreaElement>(null!);
  const senderRef = useRef<HTMLTextAreaElement>(null!);
  const receiverRef = useRef<HTMLInputElement>(null!);
  const phoneRef = useRef<HTMLInputElement>(null!);
  const quantityRef = useRef<HTMLInputElement>(null!);

  const { validate, errors } = useOrderValidation({
    messageRef,
    senderRef,
    receiverRef,
    phoneRef,
    quantityRef,
  });

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid && product) {
      const orderInfo = {
        message: messageRef.current?.value,
        sender: senderRef.current?.value,
        receiver: receiverRef.current?.value,
        phone: phoneRef.current?.value,
        quantity: quantityRef.current?.value,
      };

      alert(
        `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${orderInfo.quantity}\n발신자 이름: ${orderInfo.sender}\n메시지: ${orderInfo.message}`
      );

      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (!product) {
      navigate("/notfound", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <Form>
      <MessageCardSection inputRef={messageRef} error={errors.message} />
      <SenderInfoSection inputRef={senderRef} error={errors.sender} />
      <ReceiverInfoSection
        receiverRef={receiverRef}
        phoneRef={phoneRef}
        errorReceiver={errors.receiver}
        errorPhone={errors.phone}
        quantityRef={quantityRef}
        errorQuantity={errors.quantity}
      />
      <ProductSummarySection product={product} />
      <OrderButton
        color="yellow"
        label="주문하기"
        size="large"
        onClick={handleSubmit}
      />
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  padding: 12px 16px;
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 16px auto 0;
  width: 80%;
`;

export default OrderPage;
