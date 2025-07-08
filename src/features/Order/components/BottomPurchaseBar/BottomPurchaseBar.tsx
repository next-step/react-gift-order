import MyButton from '@/component/Button/Button'
import * as S from './BottomPurchaseBar.styles.ts'

interface BottomPurchaseBarProps {
  handlePurchase: () => void
  totalPrice: number
}

const BottomPurchaseBar = ({
  handlePurchase,
  totalPrice,
}: BottomPurchaseBarProps) => {
  return (
    <S.Footer>
      <MyButton onClick={handlePurchase} variant="primary" fullWidth={true}>
        <S.PriceText>{totalPrice.toLocaleString()}원 결제하기</S.PriceText>
      </MyButton>
    </S.Footer>
  )
}

export default BottomPurchaseBar
