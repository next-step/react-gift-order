import * as S from '@/styles/OrderPage.styles';

interface Props {
  totalPrice: number;
  onSubmit: () => void;
}

export const OrderPageFooter = ({ totalPrice, onSubmit }: Props) => (
  <footer css={S.footer}>
    <button type="button" css={S.submitButton} onClick={onSubmit}>
      {totalPrice.toLocaleString()}원 주문하기
    </button>
  </footer>
);
