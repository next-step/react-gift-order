/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MessageCardSection from "./MessageCardSection";
import SenderInfoSection from "./SenderInfoSection";
import ReceiverInfoSection from "./RecieverSection";
import ProductSummarySection from "./ProductSummarySection";
import useOrderValidation from "../../hooks/useOrderValidation";
import OrderButton from "../../components/common/BaseButton";
import { MOCK_PRODUCTS } from "../../mocks/products_list_mock";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((item) => item.id === Number(id));

  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { validate, errors } = useOrderValidation({
    message,
    sender,
    receiver,
    phone,
    quantity,
  });

  if (!product) {
    useEffect(() => {
      navigate("/notfound", { replace: true });
    }, []);

    return null;
  }

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid && product) {
      const orderInfo = {
        message,
        sender,
        receiver,
        phone,
        quantity,
      };

      alert(
        `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${orderInfo.quantity}\n발신자 이름: ${orderInfo.sender}\n메시지: ${orderInfo.message}`
      );

      navigate("/", { replace: true });
    }
  };

  return (
    <Form>
      <MessageCardSection
        value={message}
        onChange={setMessage}
        error={errors.message}
      />
      <SenderInfoSection
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        error={errors.sender}
      />
      <ReceiverInfoSection
        receiver={receiver}
        onChangeReceiver={(e) => setReceiver(e.target.value)}
        phone={phone}
        onChangePhone={(e) => setPhone(e.target.value)}
        quantity={quantity}
        onChangeQuantity={(e) => setQuantity(parseInt(e.target.value))}
        errorReceiver={errors.receiver}
        errorPhone={errors.phone}
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
