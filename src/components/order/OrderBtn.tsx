import React from 'react';
import styled from '@emotion/styled';
const Button = styled.button`
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
  background-color: rgb(254, 229, 0);
  color: rgb(42, 48, 56);
  transition:
    background-color 200ms,
    color 200ms;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
`;
interface OrderBtnProps {
  onClick: () => void;
  totalPrice: number;
}
const OrderBtn = ({ onClick, totalPrice }: OrderBtnProps) => {
  return <Button onClick={onClick}>{totalPrice}원 주문하기</Button>;
};

export default OrderBtn;
