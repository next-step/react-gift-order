// src/components/RankingList.tsx

import React, { useState } from 'react'
import styled from '@emotion/styled'
import { spacing } from '@/theme/spacing'
import LoadMoreButton from './LoadMoreButton'
import RankingItem from './RankingItem'
import { useLoadMore } from '@/hooks/useLoadMore'
import type { Product } from '@/type'

//— 더미 데이터
export const mockItem: Product = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: { basicPrice: 29000, discountRate: 0, sellingPrice: 29000 },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
}

export const defaultProducts: Product[] = Array(6).fill(mockItem)

export const fetchMoreProducts = async (): Promise<Product[]> => {
  await new Promise((r) => setTimeout(r, 500))
  return Array(15).fill(mockItem)
}

//— 컴포넌트 Props 타입
export interface RankingListProps {
  initialProducts?: Product[]
  fetchMore?: () => Promise<Product[]>
}

//— RankingList 컴포넌트
const RankingList: React.FC<RankingListProps> = ({
  initialProducts = defaultProducts,
  fetchMore = fetchMoreProducts,
}) => {
  const { items, loadMore, loading, loaded } = useLoadMore<Product>(
    initialProducts,
    fetchMore,
  )
  const [expanded, setExpanded] = useState(false)

  // 펼침 상태에 따라 보여줄 아이템 수 조절
  const visibleItems = expanded ? items : items.slice(0, 6)

  const handleToggle = async () => {
    if (!expanded && !loaded) {
      await loadMore()
    }
    setExpanded((prev) => !prev)
  }

  return (
    <Wrapper>
      <GridContainer>
        {visibleItems.map((prod, idx) => (
          <RankingItem key={`${prod.id}-${idx}`} rank={idx + 1} product={prod} />
        ))}
      </GridContainer>

      <ButtonWrap>
        <LoadMoreButton onClick={handleToggle} disabled={loading}>
          {loading ? '로딩중...' : expanded ? '접기' : '더보기'}
        </LoadMoreButton>
      </ButtonWrap>
    </Wrapper>
  )
}

export default RankingList

//— styled components
const Wrapper = styled.div`
  padding: 0 ${spacing.spacing4};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.spacing4};
`

const ButtonWrap = styled.div`
  margin-top: ${spacing.spacing4};
`
