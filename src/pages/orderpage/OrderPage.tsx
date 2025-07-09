/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MessageCardSection from "@/pages/orderpage/MessageCardSection";
import SenderInfoSection from "@/pages/orderpage/SenderInfoSection";
import ReceiverInfoSection from "@/pages/orderpage/RecieverSection";
import ProductSummarySection from "@/pages/orderpage/ProductSummarySection";
import { useForm } from "@/hooks/useForm";
import OrderButton from "@/components/common/BaseButton";
import { MOCK_PRODUCTS } from "@/mocks/products_list_mock";
import {
  validateMessage,
  validateSender,
  validateReceiver,
  validatePhone,
  validateQuantity,
} from "@/utils/validator";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((item) => item.id === Number(id));

  const { values, setValues, errors, validateAll } = useForm(
    {
      message: "",
      sender: "",
      receiver: "",
      phone: "",
      quantity: 1,
    },
    {
      message: validateMessage,
      sender: validateSender,
      receiver: validateReceiver,
      phone: validatePhone,
      quantity: validateQuantity,
    }
  );

  useEffect(() => {
    if (!product) {
      navigate("/notfound", { replace: true });
    }
  }, [product]);

  if (!product) return null;

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const isValid = validateAll();
        if (!isValid) return;
        alert(
          `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${values.quantity}\n발신자 이름: ${values.sender}\n메시지: ${values.message}`
        );
        navigate("/", { replace: true });
      }}
    >
      <MessageCardSection
        value={values.message}
        onSelect={(text) => {
          setValues({ ...values, message: text });
        }}
        onChangeMessage={(text) => setValues({ ...values, message: text })}
        error={errors.message}
      />
      <SenderInfoSection
        value={values.sender}
        onChange={(e) => setValues({ ...values, sender: e.target.value })}
        error={errors.sender}
      />
      <ReceiverInfoSection
        receiver={values.receiver}
        onChangeReceiver={(e) =>
          setValues({ ...values, receiver: e.target.value })
        }
        phone={values.phone}
        onChangePhone={(e) => setValues({ ...values, phone: e.target.value })}
        quantity={values.quantity}
        onChangeQuantity={(e) =>
          setValues({ ...values, quantity: Number(e.target.value) })
        }
        errorReceiver={errors.receiver}
        errorPhone={errors.phone}
        errorQuantity={errors.quantity}
      />
      <ProductSummarySection product={product} />
      <OrderButton color="yellow" label="주문하기" size="large" type="submit" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

export default OrderPage;
