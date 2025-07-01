import styled from '@emotion/styled'
import { categoryMock } from '@/components/Category/categoryMock'
import { CategoryItem } from '@/components/Category/CategoryItem'
import { FiPlus } from 'react-icons/fi'

export function CategorySection() {
  return (
    <SectionWrapper>
      <MessageBox>
        <PlusIconWrapper>
          <FiPlus size={16} color="#000" />
        </PlusIconWrapper>
        <MessageText>선물할 친구를 선택해 주세요.</MessageText>
      </MessageBox>

      <Title>선물 테마</Title>

      <GridWrapper>
        {categoryMock.map(({ themeId, name, image }) => (
          <CategoryItem key={themeId} name={name} image={image} />
        ))}
      </GridWrapper>

      <NoticeBox>
        <NoticeText>카카오테크 캠퍼스 3기여러분</NoticeText>
        <StrongText>프론트엔드 2단계 과제 화이팅! 🎉</StrongText>
      </NoticeBox>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100%;
  margin-bottom: 40px;
`

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  margin-bottom: 24px;
`
const PlusIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MessageText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textDefault};
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.textDefault};
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
`

const NoticeBox = styled.div`
  margin-top: 32px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  text-align: left;
`

const NoticeText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSub};
  margin-bottom: 4px;
`

const StrongText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDefault};
`
