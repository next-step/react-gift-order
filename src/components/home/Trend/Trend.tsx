import { productListMock } from '@/data/productListMock'
import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { TargetType, RankType } from './types'
import { isValidTargetType, isValidRankType } from './types'
import { TrendFilter } from './TrendFilter'
import { ProductItem } from './ProductItem'
import { Button } from '@/components/common/Button'

// * 실시간 급상승 컴포넌트
export const Trend = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showAll, setShowAll] = useState(false)

  // * URL 파라미터에서 초기값 가져오기
  const getInitialTargetType = (): TargetType => {
    const urlTargetType = searchParams.get('targetType')
    return urlTargetType && isValidTargetType(urlTargetType) ? urlTargetType : 'ALL'
  }

  const getInitialRankType = (): RankType => {
    const urlRankType = searchParams.get('rankType')
    return urlRankType && isValidRankType(urlRankType) ? urlRankType : 'MANY_WISH'
  }

  // * URL 파라미터 타입별 상태 관리
  const [targetType, setTargetType] = useState<TargetType>(getInitialTargetType)
  const [rankType, setRankType] = useState<RankType>(getInitialRankType)

  // * 초기 보여줄 상품 개수
  const INITIAL_SHOW_COUNT = 6

  // * URL 파라미터 변경 감지
  // ! 불필요한 리렌더링 방지를 위해 상태 변화 감지는 searchParams 만 적용
  useEffect(() => {
    const urlTargetType = searchParams.get('targetType')
    const urlRankType = searchParams.get('rankType')

    if (urlTargetType && isValidTargetType(urlTargetType)) {
      setTargetType(urlTargetType)
    }

    if (urlRankType && isValidRankType(urlRankType)) {
      setRankType(urlRankType)
    }
  }, [searchParams])

  // * 표시할 상품 리스트 결정
  const displayProducts = showAll ? productListMock : productListMock.slice(0, INITIAL_SHOW_COUNT)

  // * 더보기 버튼 표시 여부
  const shouldShowMoreButton = productListMock.length > INITIAL_SHOW_COUNT

  // * 더보기 버튼 핸들러
  const handleMoreButtonClick = () => {
    setShowAll(!showAll)
  }

  // * Target 타입 필터 핸들러
  const handleTargetTypeChange = (type: TargetType) => {
    setTargetType(type)

    // * URL 파라미터 업데이트
    // ! 새로운 인스턴스 사용
    // ? searchParams는 읽기 전용처럼 취급하고, 정상적으로 React Router가 변경을 감지하도록
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('targetType', type)
    setSearchParams(newSearchParams)

    // TODO: 추후 실제 상품 목록 필터링 시 수정
    console.log('Selected target type:', type)
  }

  // * Rank 타입 필터 핸들러
  const handleRankTypeChange = (type: RankType) => {
    setRankType(type)

    // * URL 파라미터 업데이트
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('rankType', type)
    setSearchParams(newSearchParams)

    // TODO: 추후 실제 상품 목록 필터링 시 수정
    console.log('Selected rank type:', type)
  }

  return (
    <Container>
      {/* 실시간 급상승 필터 컨테이너 */}
      <h1 css={theme.typography.title.title1Bold}>실시간 급상승 선물랭킹</h1>

      {/* 필터 */}
      <TrendFilter
        targetType={targetType}
        rankType={rankType}
        onTargetTypeChange={handleTargetTypeChange}
        onRankTypeChange={handleRankTypeChange}
      />

      {/* 실시간 급상승 상품 컨테이너 */}
      <ProductContainer>
        {displayProducts.map((product, index) => (
          <ProductItem key={product.id} product={product} index={index} />
        ))}
      </ProductContainer>

      {/* 더보기 버튼 */}
      {shouldShowMoreButton && (
        <MoreButtonContainer>
          <Button variant="outline" size="medium" onClick={handleMoreButtonClick}>
            {showAll ? '접기' : `더보기`}
          </Button>
        </MoreButtonContainer>
      )}
    </Container>
  )
}

// * 실시간 급상승 컨테이너
const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: ${theme.spacing.spacing5};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing5};
`

// * 실시간 급상승 상품 컨테이너
const ProductContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${theme.spacing.spacing2};
  row-gap: ${theme.spacing.spacing5};
`

// * 더보기 버튼 컨테이너
const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing.spacing4};
`
