import styled from "@emotion/styled";
import { useRef, useState } from "react";
import MessageCard, {
  type MessageCardHandle,
} from "@/pages/order/components/MessageCard";
import SenderInfo, {
  type SenderInfoHandle,
} from "@/pages/order/components/SenderInfo";
import ReceiverInfo, {
  type ReceiverInfoHandle,
} from "@/pages/order/components/ReceiverInfo";
import ProductInfo from "@/pages/order/components/ProductInfo";
import OrderFooter from "@/pages/order/components/OrderFooter";

import { useNavigate, useParams } from "react-router-dom";
import { mockRankingData } from "@/mock/mockData";

export default function OrderPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const id = Number(productId);
  const product = mockRankingData.find((p) => p.id === Number(id));

  if (!product) return <div>상품 정보를 찾을 수 없습니다.</div>;

  const messageCardRef = useRef<MessageCardHandle>(null);
  const senderInfoRef = useRef<SenderInfoHandle>(null);
  const receiverInfoRef = useRef<ReceiverInfoHandle>(null);

  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverInfo, setReceiverInfo] = useState({
    name: "",
    phone: "",
    quantity: 1,
  });

  const totalPrice = product.price.sellingPrice * receiverInfo.quantity;

  const handleOrderClick = () => {
    const isMessageValid = messageCardRef.current?.validate() ?? false;
    const isSenderValid = senderInfoRef.current?.validate() ?? false;
    const isReceiverValid = receiverInfoRef.current?.validate() ?? false;

    if (!isMessageValid || !isSenderValid || !isReceiverValid) {
      return;
    }

    const alertMessage = `
        주문이 완료되었습니다.
        상품명: ${product.name}
        구매 수량: ${receiverInfo.quantity}
        발신자 이름: ${senderName}
        메시지: ${message}
        `;

    window.alert(alertMessage.trim());

    navigate("/");
  };

  return (
    <>
      <MessageCard ref={messageCardRef} onSelect={(msg) => setMessage(msg)} />
      <SectionDivider />
      <SenderInfo
        ref={senderInfoRef}
        onChange={(name) => setSenderName(name)}
      />
      <SectionDivider />
      <ReceiverInfo
        ref={receiverInfoRef}
        onChange={(info) => setReceiverInfo(info)}
      />
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
