/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Navigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import MessageCardSection from "@/pages/orderpage/MessageCardSection";
import SenderInfoSection from "@/pages/orderpage/SenderInfoSection";
import ReceiverInfoSection from "@/pages/orderpage/ReceiverInfoSection";
import ProductSummarySection from "@/pages/orderpage/ProductSummarySection";
import { useForm, FormProvider } from "react-hook-form";
import OrderButton from "@/components/common/BaseButton";
import { MOCK_PRODUCTS } from "@/mocks/products_list_mock";
import { zodResolver } from "@hookform/resolvers/zod";
import { fullOrderSchema } from "@/utils/validator";
import type { FullOrderFormValues } from "@/utils/validator";

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((item) => item.id === Number(id));

  const methods = useForm<FullOrderFormValues>({
    resolver: zodResolver(fullOrderSchema),
    defaultValues: {
      message: "",
      sender: "",
      receivers: [],
    },
  });
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  if (!product) {
    return <Navigate to="/notfound" replace />;
  }

  const onSubmit = (data: FullOrderFormValues) => {
    console.log(data);
    alert(
      `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${data.receivers.reduce(
        (acc, cur) => acc + cur.quantity,
        0
      )}\n발신자 이름: ${data.sender}\n메시지: ${data.message}`
    );
    navigate("/", { replace: true });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MessageCardSection error={errors.message?.message} />
        <SenderInfoSection error={errors.sender?.message} />
        <ReceiverInfoSection />
        <ProductSummarySection product={product} />
        <OrderButton
          color="yellow"
          label="주문하기"
          size="large"
          type="submit"
        />
      </Form>
    </FormProvider>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

export default OrderPage;
