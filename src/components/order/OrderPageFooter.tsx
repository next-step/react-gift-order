import * as S from '@/styles/OrderPage.styles';

interface Props {
  totalPrice: number;
}

export const OrderPageFooter = ({ totalPrice }: Props) => (
  <footer css={S.footer}>
    <button type="submit" css={S.submitButton}>
      {totalPrice.toLocaleString()}원 주문하기
    </button>
  </footer>
);
