import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { products } from '@/data/products'
import type { Product } from '@/data/products'
import {
  Container,
  GenderTab,
  TypeTab,
  Title,
} from './TrendingGiftRanking.styles'
import { FilterGender, FilterType } from './TrendingGiftRankingFilter'
import ProductCard from '@/component/ProductCard/ProductCard'

const INITIAL_VISIBLE_COUNT = 6

const genderList = [
  { label: 'All', icon: 'ALL' },
  { label: '남성이', icon: '👨‍🦰' },
  { label: '여성이', icon: '👩‍🦰' },
  { label: '청소년이', icon: '👦' },
] as const

const typeList = ['받고 싶어한', '많이 선물한', '위시로 받은'] as const

export type Gender = (typeof genderList)[number]['label']
export type Type = (typeof typeList)[number]

const TrendingGiftRanking = () => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const selectedGender = searchParams.get('gender') ?? genderList[0].label
  const selectedType = searchParams.get('type') ?? typeList[0]

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleGenderClick = (gender: Gender) => {
    const params = new URLSearchParams(searchParams)
    params.set('gender', gender)
    if (selectedType) params.set('type', selectedType)
    setSearchParams(params, { replace: true })
  }

  const handleTypeSelect = (type: Type) => {
    const params = new URLSearchParams(searchParams)
    params.set('type', type)
    if (selectedGender) params.set('gender', selectedGender)
    setSearchParams(params, { replace: true })
  }

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    navigate(`/order?productId=${product.id}`)
  }

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_VISIBLE_COUNT)
      setIsExpanded(false)
    } else {
      setVisibleCount(products.length)
      setIsExpanded(true)
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    let isValid = true

    if (!genderList.map((g) => g.label).includes(selectedGender as Gender)) {
      params.set('gender', genderList[0].label)
      isValid = false
    }

    if (!typeList.includes(selectedType as Type)) {
      params.set('type', typeList[0])
      isValid = false
    }

    if (!isValid) setSearchParams(params, { replace: true })
  }, [searchParams, selectedGender, selectedType, setSearchParams])

  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <GenderTab>
        {genderList.map(({ icon, label }) => (
          <FilterGender
            key={label}
            icon={icon}
            label={label}
            isActive={selectedGender === label}
            onClick={handleGenderClick}
          />
        ))}
      </GenderTab>

      <TypeTab>
        {typeList.map((label) => (
          <FilterType
            key={label}
            label={label}
            isActive={selectedType === label}
            onClick={handleTypeSelect}
          />
        ))}
      </TypeTab>

      <ProductCard
        products={products}
        visibleCount={visibleCount}
        isExpanded={isExpanded}
        onProductSelect={handleProductSelect}
        onToggleView={handleToggleView}
      />
    </Container>
  )
}

export default TrendingGiftRanking
