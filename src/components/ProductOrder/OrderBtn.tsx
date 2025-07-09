import styled from '@emotion/styled';

type OrderBtnProps = {
  price: number;
  onClick: () => void;
};

const OrderBtn = ({ price, onClick }: OrderBtnProps) => {
  return (
    <StickyWrapper>
      <Button onClick={onClick}>{price.toLocaleString()}원 주문하기</Button>
    </StickyWrapper>
  );
};

export default OrderBtn;

const StickyWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 720px;
  height: 56px;
  z-index: 100;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: #ffe000;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #222;
  cursor: pointer;

  &:active {
    background-color: #ffdd00;
  }
`;
