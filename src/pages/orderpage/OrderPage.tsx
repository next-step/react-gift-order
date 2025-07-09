/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MessageCardSection from "@/pages/orderpage/MessageCardSection";
import SenderInfoSection from "@/pages/orderpage/SenderInfoSection";
import ReceiverInfoSection from "@/pages/orderpage/RecieverSection";
import ProductSummarySection from "@/pages/orderpage/ProductSummarySection";
import { useForm } from "react-hook-form";
import OrderButton from "@/components/common/BaseButton";
import { MOCK_PRODUCTS } from "@/mocks/products_list_mock";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((item) => item.id === Number(id));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
      sender: "",
      receiver: "",
      phone: "",
      quantity: 1,
    },
  });

  useEffect(() => {
    if (!product) {
      navigate("/notfound", { replace: true });
    }
  }, [product]);

  if (!product) return null;

  const onSubmit = (data: any) => {
    alert(
      `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${data.quantity}\n발신자 이름: ${data.sender}\n메시지: ${data.message}`
    );
    navigate("/", { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MessageCardSection
        register={register}
        setValue={setValue}
        error={errors.message?.message}
      />
      <SenderInfoSection register={register} error={errors.sender?.message} />
      <ReceiverInfoSection register={register} errors={errors} />
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
