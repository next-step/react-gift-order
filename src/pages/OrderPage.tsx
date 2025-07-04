import { HorizontalSpacing } from "@/components/common/Spacing/HorizontalSpacing";
import GiftMessageSection from "@/components/order/GiftMessageSection";
import ProductInfoSection from "@/components/order/ProductInfoSection";
import SenderSection from "@/components/order/SenderSection";
import ReceiverSection from "@/components/order/ReceiverSection";
import { useOrderForm } from "@/contexts/OrderFormContext";

function OrderPage() {
  const { nameInput, phoneInput, quantityInput, senderInput } = useOrderForm();

  return (
    <>
      <GiftMessageSection />
      <HorizontalSpacing size="spacing3" />
      <SenderSection senderInput={senderInput} />
      <HorizontalSpacing size="spacing3" />
      <ReceiverSection
        nameInput={nameInput}
        phoneInput={phoneInput}
        quantityInput={quantityInput}
      />
      <HorizontalSpacing size="spacing3" />
      <ProductInfoSection />
      <HorizontalSpacing size="spacing3" />
    </>
  );
}

export default OrderPage;
