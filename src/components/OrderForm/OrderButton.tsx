import styled from '@emotion/styled';

interface OrderButtonProps {
  type?: 'button' | 'submit';
  totalPrice: number;
}

const OrderButtonUI = styled.button(({ theme }) => ({
  width: '100%',
  maxWidth: '720px',
  height: '3.125rem',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  right: '0px',
  margin: '0px auto',
  display: 'flex',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  backgroundColor: theme.semanticColors.brand.kakaoYellow,
  color: theme.semanticColors.text.default,
  transition: 'background-color 200ms, color 200ms',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
}));

export const OrderButton = ({ type = 'button', totalPrice }: OrderButtonProps) => {
  return <OrderButtonUI type={type}>{totalPrice.toLocaleString()}원 주문하기</OrderButtonUI>;
};
