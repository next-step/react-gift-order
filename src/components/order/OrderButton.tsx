import styled from '@emotion/styled';

const Content = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 720px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border: none;
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  cursor: pointer;
`;

interface Props {
  priceSum: number;
  qty: number;
  onClick?: () => void;
}

export default function OrderButton({ priceSum, qty, onClick }: Props) {
  const total = priceSum * qty;

  return <Content onClick={onClick}>{total}원 주문하기</Content>;
}
