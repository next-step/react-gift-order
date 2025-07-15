import { useParams, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { cardData } from "@/mockdata/cardData";
import { OrderCardData } from "@/mockdata/ordercardData";
import CardSelectionSection from "@/sections/CardSelectionSection/CardSelectionSection";
import SenderInfoSection from "@/sections/SenderInfoSection/SenderInfoSection";
import GroupGettersInfoSection from "@/sections/GroupGettersInfoSection/GroupGettersInfoSection";
import OrderSummarySection from "@/sections/OrderSummarySection/OrderSummarySection";

export type FormValues = {
  selectedIdx: number;
  senderName: string;
  quantity: number;
  cardMessage: string;
  getters: { name: string; phone: string; quantity: number }[];
};

const OrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = cardData.find((item) => String(item.id) === String(id));

  const methods = useForm<FormValues>({
    defaultValues: {
      selectedIdx: 0,
      senderName: "",
      quantity: 1,
      cardMessage: OrderCardData[0].defaultTextMessage,
      getters: [],
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    window.alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product?.name}\n` +
        `구매 수량: ${data.quantity}\n` +
        `발신자 이름: ${data.senderName}\n` +
        `메시지: ${data.cardMessage}`
    );
    navigate("/", { replace: true });
  };

  return (
    <>
      <NavigationBar />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardSelectionSection />
          <SenderInfoSection />
          <GroupGettersInfoSection />
          <OrderSummarySection product={product} />
        </form>
      </FormProvider>
    </>
  );
};

export default OrderPage;
