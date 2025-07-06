import styled from "@emotion/styled";
import GiftCardSelector from "@/components/GiftCardSelector";
import SenderForm from "@/components/SenderForm";
import ReceiverForm from "@/components/ReceiverForm";
import GiftInfo from "@/components/GiftInfo";
import { useParams } from "react-router-dom";
import { ranking } from "@/data/ranking";
import { useState } from "react";

export default function OrderPage() {
  const { itemId } = useParams();
  const card = ranking.find((card) => card.id === Number(itemId));
  if (!card) return null;

  return (
    <Wrapper>
      <GiftCardSelector />
      <Divider />
      <SenderForm />
      <Divider />
      <ReceiverForm />
      <Divider />
      <GiftInfo />
      <OrderBtn>
        {card.price.basicPrice.toLocaleString()}원 주문하기
      </OrderBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
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
`;
