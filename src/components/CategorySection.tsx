import styled from '@emotion/styled';
import { CategoryItem } from '@/components/CategoryItem';
import { categoryMock } from '@/data/categoryMock';

export function CategorySection() {
  return (
    <Section>
      {/* 선물할 친구 선택 메시지 */}
      <MessageBox>
        <PlusIcon aria-hidden="true">
          <span className="material-icons-outlined">add</span>
        </PlusIcon>
        <MessageText>선물할 친구를 선택해 주세요.</MessageText>
      </MessageBox>

      {/* 선물 테마 타이틀 */}
      <Title>선물 테마</Title>

      {/* 테마 목록 그리드 */}
      <Grid>
        {categoryMock.map(({ themeId, name, image }) => (
          <CategoryItem key={themeId} name={name} image={image} />
        ))}
      </Grid>

      {/* 과제 응원 노티스 */}
      <NoticeBox>
        <NoticeText>카카오테크 캠퍼스 3기여러분</NoticeText>
        <StrongText>프론트엔드 2단계 과제 화이팅! 🎉</StrongText>
      </NoticeBox>
    </Section>
  );
}

/* ───────── styles ───────── */

const NAVBAR_HEIGHT = '56px'; /* 고정 헤더 높이 */

const Section = styled.section`
  max-width: 720px;
  margin: ${NAVBAR_HEIGHT} auto 0; /* 헤더만큼 내려주기 */
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.semanticColors.border.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ theme }) => theme.semanticColors.background.default};
`;

const PlusIcon = styled.span`
  background-color: ${({ theme }) => theme.semanticColors.brand.kakaoYellow};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .material-icons-outlined {
    font-size: 16px;
    line-height: 1; /* 인라인 폰트 보정 */
  }
`;

const MessageText = styled.span`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.semanticColors.text.default};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.semanticColors.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing3};

  @media (max-width: 360px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const NoticeBox = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing8};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.semanticColors.brand.kakaoYellow};
  text-align: left;
`;

const NoticeText = styled.div`
  ${({ theme }) => theme.typography.label.label1Regular};
  color: ${({ theme }) => theme.semanticColors.text.sub};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const StrongText = styled.div`
  ${({ theme }) => theme.typography.body.body2Bold};
  color: ${({ theme }) => theme.semanticColors.text.default};
`;
