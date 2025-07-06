import TheHeader from "@/components/layout/TheHeader";
import { useParams } from "react-router";

const OrderPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <TheHeader />
      <div>주문 페이지 {id}</div>
    </>
  );
};

export default OrderPage;
