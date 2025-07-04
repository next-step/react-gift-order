import { HorizontalSpacing } from "@/components/common/Spacing/HorizontalSpacing";
import GiftMessageSection from "@/components/order/GiftMessageSection";
import ProductInfoSection from "@/components/order/ProductInfoSection";
import SenderSection from "@/components/order/SenderSection";
import ReceiverSection from "@/components/order/ReceiverSection";

function OrderPage() {
  return (
    <>
      <GiftMessageSection />
      <HorizontalSpacing size="spacing3" />
      <SenderSection />
      <HorizontalSpacing size="spacing3" />
      <ReceiverSection />
      <HorizontalSpacing size="spacing3" />
      <ProductInfoSection />
      <HorizontalSpacing size="spacing3" />
    </>
  );
}

export default OrderPage;
