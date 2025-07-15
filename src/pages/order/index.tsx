import styled from "@emotion/styled";
import { useCallback, useRef, useState } from "react";
import MessageCard, {
  type MessageCardHandle,
} from "@/pages/order/components/MessageCard";
import SenderInfo, {
  type SenderInfoHandle,
} from "@/pages/order/components/SenderInfo";
import ReceiverListSection, {
  type Receiver,
} from "@/pages/order/components/ReceiverListSection";
import ProductInfo from "@/pages/order/components/ProductInfo";
import OrderFooter from "@/pages/order/components/OrderFooter";

import { useNavigate, useParams } from "react-router-dom";
import { mockRankingData } from "@/mock/mockData";
import { validateReceiverCount } from "@/utils/validators";

export default function OrderPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const id = Number(productId);
  const product = mockRankingData.find((p) => p.id === Number(id));

  if (!product) return <div>상품 정보를 찾을 수 없습니다.</div>;

  const messageCardRef = useRef<MessageCardHandle>(null);
  const senderInfoRef = useRef<SenderInfoHandle>(null);

  const [receivers, setReceivers] = useState<Receiver[]>([]);

  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const totalQuantity = receivers.reduce(
    (sum, receiver) => sum + receiver.quantity,
    0,
  );
  const totalPrice = product.price.sellingPrice * totalQuantity;

  const handleOrderClick = () => {
    const isMessageValid = messageCardRef.current?.validate() ?? false;
    const isSenderValid = senderInfoRef.current?.validate() ?? false;

    if (!isMessageValid || !isSenderValid) {
      return;
    }

    const receiverError = validateReceiverCount(receivers.length);
    if (receiverError) {
      alert(receiverError);
      return;
    }

    const alertMessage = [
      `주문이 완료되었습니다.`,
      `상품명: ${product.name}`,
      `구매 수량: ${receivers.length}`,
      `발신자 이름: ${senderName}`,
      `메시지: ${message}`,
    ].join("\n");

    window.alert(alertMessage.trim());

    navigate("/");
  };

  const handleReceiverChange = useCallback((newReceivers: Receiver[]) => {
    setReceivers(newReceivers);
  }, []);

  return (
    <>
      <MessageCard
        ref={messageCardRef}
        onMessageChange={(msg) => setMessage(msg)}
      />
      <SectionDivider />
      <SenderInfo
        ref={senderInfoRef}
        onChange={(name) => setSenderName(name)}
      />
      <SectionDivider />
      <ReceiverListSection onChange={handleReceiverChange} />

      <SectionDivider />
      <ProductInfo
        name={product.name}
        imageUrl={product.imageURL}
        brand={product.brandInfo.name}
        price={product.price.sellingPrice}
      />
      <OrderFooter totalPrice={totalPrice} onClick={handleOrderClick} />
    </>
  );
}

const SectionDivider = styled.div`
  height: 12px;
  background-color: ${({ theme }) => theme.colors.semantic.background.disabled};
`;
