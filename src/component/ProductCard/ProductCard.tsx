import * as S from './ProductCard.styles'
import type { Product } from '@/data/products'
import MyButton from '@/component/Button/Button'

interface ProductCardProps {
  products: Product[]
  visibleCount: number
  isExpanded: boolean
  onProductSelect: (product: Product) => void
  onToggleView: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  products,
  visibleCount,
  isExpanded,
  onProductSelect,
  onToggleView,
}) => {
  return (
    <>
      <S.ProductTab>
        {products.slice(0, visibleCount).map((item, index) => (
          <S.ProductItem key={item.id} onClick={() => onProductSelect(item)}>
            <S.Rank rank={index + 1}>{index + 1}</S.Rank>
            <S.ProductImage src={item.imageURL} alt={item.name} />
            <p>{item.brandInfo.name}</p>
            <p>{item.name}</p>
            <strong>{item.price.sellingPrice.toLocaleString()} 원</strong>
          </S.ProductItem>
        ))}
      </S.ProductTab>
      <MyButton
        onClick={onToggleView}
        variant="outlined"
        size="medium"
        fullWidth
      >
        {isExpanded ? '접기' : '더보기'}
      </MyButton>
    </>
  )
}

export default ProductCard
