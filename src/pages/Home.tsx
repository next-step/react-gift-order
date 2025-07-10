import styled from '@emotion/styled'
import { Category } from '@/widgets/category/Category'
import { Trend } from '@/features/product/trend/Trend'
import { Banner } from '@/widgets/banner/Banner'
import { Friends } from '@/widgets/friends/Friends'
import { PageContainer } from '@/shared/ui/PageContainer'

// * 메인
export const Home = () => {
  return (
    <HomeContainer>
      {/* 선물할 친구 섹션 */}
      <Friends />
      {/* 카테고리 섹션 */}
      <Category />
      {/* 기타 배너 섹션 */}
      <Banner />
      {/* 실시간 급상승 섹션 */}
      <Trend />
    </HomeContainer>
  )
}

// * 홈 컨테이너 스타일 확장
const HomeContainer = styled(PageContainer)`
  /* 홈 페이지의 경우 위쪽으로 정렬 */
  justify-content: flex-start;
`
