import { HorizontalSpacing } from "@/components/common/Spacing/HorizontalSpacing";
import GiftMessageSection from "@/components/order/GiftMessageSection";
import ProductInfoSection from "@/components/order/ProductInfoSection";
import SenderSection from "@/components/order/SenderSection";
import ReceiverSection from "@/components/order/ReceiverSection";

function OrderPage() {
  return (
    <>
      <GiftMessageSection />
      <HorizontalSpacing size="spacing6" />
      <SenderSection />
      <HorizontalSpacing size="spacing6" />
      <ReceiverSection />
      <HorizontalSpacing size="spacing6" />
      <ProductInfoSection />
    </>
  );
}

export default OrderPage;
