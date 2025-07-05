import styled from "@emotion/styled";

type Props = {
  totalPrice: number;
  onClick: () => void;
};

export default function OrderFooter({ totalPrice, onClick }: Props) {
  return (
    <FooterWrapper>
      <OrderButton onClick={onClick}>
        {totalPrice.toLocaleString()}원 주문하기
      </OrderButton>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.colors.brand.kakao.yellow};
  z-index: 1000;
`;

const OrderButton = styled.button`
  ${({ theme }) => theme.typography.body1Bold};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4} 0;
  color: ${({ theme }) => theme.colors.colorScale.gray.gray900};
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
`;
