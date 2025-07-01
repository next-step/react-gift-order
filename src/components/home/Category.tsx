import styled from '@emotion/styled'
import { categoryMock } from '@/data/categoryMock'
import { theme } from '@/styles/theme'
import { Link } from 'react-router-dom'

// * 카테고리 컴포넌트
export const Category = () => {
  return (
    // 외부 컨테이너
    <Container>
      {/* 카테고리 타이틀 */}
      <h1 css={theme.typography.title.title1Bold}>선물 테마</h1>
      {/* 내부 서브 컨테이너 */}
      <SubContainer>
        {categoryMock.map((category) => (
          // 카테고리 아이템
          // TODO: 이후 카테고리 페이지 관련 ROUTE PATH 지정 시 수정 필요 (현재는 임시 경로)
          <Item to={`/category/${category.themeId}`} key={category.themeId}>
            <Image src={category.image} alt={category.name} />
            <span css={theme.typography.label.label2Regular}>{category.name}</span>
          </Item>
        ))}
      </SubContainer>
    </Container>
  )
}

// * 카테고리 컨테이너
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

// * 카테고리 서브 컨테이너
const SubContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.spacing5};
`

// * 카테고리 아이템 - 링크 연결
const Item = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

// * 카테고리 이미지
const Image = styled.img`
  width: auto;
  height: 50px;
`
