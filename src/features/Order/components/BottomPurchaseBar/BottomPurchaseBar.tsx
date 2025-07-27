import MyButton from '@/components/button/button';
import { Footer, PriceText } from './BottomPurchaseBar.styles.ts';

interface BottomPurchaseBarProps {
  handlePurchase: () => void;
  totalPrice: number;
}

const BottomPurchaseBar = ({
  handlePurchase,
  totalPrice,
}: BottomPurchaseBarProps) => {
  return (
    <Footer>
      <MyButton onClick={handlePurchase} variant="primary" fullWidth={true}>
        <PriceText>{totalPrice.toLocaleString()}원 결제하기</PriceText>
      </MyButton>
    </Footer>
  );
};

export default BottomPurchaseBar;
