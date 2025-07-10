import styled from "@emotion/styled";
import GiftCardSelector from "@/components/order/GiftCardSelector";
import SenderForm from "@/components/order/SenderForm";
import ReceiverForm from "@/components/order/ReceiverForm";
import GiftInfo from "@/components/order/GiftInfo";
import { useNavigate, useParams } from "react-router-dom";
import { ranking } from "@/data/ranking";
import useOrderForm from "../components/order/useOrderForm";
import { useState } from "react";
import type { Receiver } from "@/types/order";

export default function OrderPage() {
  const navigate = useNavigate();

  const { itemId } = useParams();
  const card = ranking.find((card) => card.id === Number(itemId));
  if (!card) return null;

  const message = useOrderForm();
  const sender = useOrderForm();

  const [receiverList, setReceiverList] = useState<Receiver[]>([]);

  const handleOrder = () => {
    const isMessageValid = message.validate();
    const isSenderValid = sender.validate();
    const isQuantityValid = receiverList.length > 0;

    if (!isMessageValid || !isSenderValid || !isQuantityValid) {
      return;
    }

    const totalQuantity = receiverList.reduce((sum, receiver) => sum + Number(receiver.quantity), 0);

    alert(`주문이 완료되었습니다.
상품명: ${card.name}
총 구매 수량: ${totalQuantity}
받는 사람 수: ${receiverList.length}명
발신자 이름: ${sender.value}
메시지: ${message.value}`
);
    navigate("/");
  };

  return (
    <Wrapper>
      <GiftCardSelector
        value={message.value}
        onChange={message.onChange}
        error={message.error}
      />
      <Divider />
      <SenderForm
        value={sender.value}
        onChange={sender.onChange}
        error={sender.error}
      />
      <Divider />
      <ReceiverForm
        receiverList={receiverList}
        setReceiverList={setReceiverList}
      />
      <Divider />
      <GiftInfo />
      <OrderBtn onClick={handleOrder}>
        {(card.price.basicPrice * (receiverList.reduce((sum, receiver) => sum + Number(receiver.quantity), 0))).toLocaleString()}원 주문하기
      </OrderBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding-top: 3px;
  display: block;
`;

const Divider = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

const OrderBtn = styled.button`
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  border: none;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition:
    background-color 200ms,
    color 200ms;s
  ${({ theme }) => theme.typography.title1Bold};
  cursor: pointer;
`;
