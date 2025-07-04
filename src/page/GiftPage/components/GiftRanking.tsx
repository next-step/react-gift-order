import styled from '@emotion/styled';
import { filters, generations } from '@/data/categoryDatas';
import useSearchParamState from '../hooks/useSearchParamState';
import useToggleCollapse from '../hooks/useToggleCollapse';
import { rankingDatas } from '@/data/rankingDatas';

interface ButtonProps {
  isActive: boolean;
}

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0px;
  width: 100%;
  text-align: left;
`;

const CatContainer = styled.div`
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GenerationGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const FilterGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.colorScale.blue[700] : theme.colors.colorScale.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[300]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RankContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing7} ${({ theme }) => theme.spacing.spacing2};
`;

const RankItem = styled.div`
  width: 100%;
  position: relative;
`;

const RankNumber = styled.span`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.subtitle2Bold.fontSize};
  line-height: 1;
  font-weight: ${({ theme }) => theme.typography.subtitle2Bold.fontWeight};
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  color: rgb(255, 255, 255);
  background-color: ${({ theme }) => theme.colors.colorScale.red[600]};
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
`;

const ItemContainer = styled.div`
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

const ItemName = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
  margin: 0px;
  text-align: left;
`;

const ItemSubName = styled.h6`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ItemPrice = styled.p`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0px;
  text-align: left;
  word-break: break-word;
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing5};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[300]};
`;

const GiftRanking = () => {
  const {
    handleGenerationGroupClick,
    handleFilterGroupClick,
    activeGenerationButton,
    activeFilterButton,
  } = useSearchParamState();

  const { isCollapsed, visibleItemsCount, toggleCollapse } = useToggleCollapse(rankingDatas.length);

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>

      <CatContainer>
        <GenerationGroup>
          {generations.map(({ id, emoji, label }) => (
            <Button
              key={id}
              isActive={activeGenerationButton === id}
              onClick={() => handleGenerationGroupClick(id)}
            >
              <div>{emoji}</div>
              <p>{label}</p>
            </Button>
          ))}
        </GenerationGroup>

        <FilterGroup>
          {filters.map(({ id, label }) => (
            <Button
              key={id}
              isActive={activeFilterButton === id}
              onClick={() => handleFilterGroupClick(id)}
            >
              <p>{label}</p>
            </Button>
          ))}
        </FilterGroup>
      </CatContainer>

      <RankContainer>
        {rankingDatas.slice(0, visibleItemsCount).map(rank => (
          <RankItem key={rank.id}>
            <RankNumber>{rank.id}</RankNumber>

            <ItemContainer>
              <Image src={rank.image} alt={rank.name} />
              <ItemName>{rank.name}</ItemName>
              <ItemSubName>{rank.subName}</ItemSubName>
              <ItemPrice>{rank.price} 원</ItemPrice>
            </ItemContainer>
          </RankItem>
        ))}
      </RankContainer>

      <ToggleButton onClick={toggleCollapse}>{isCollapsed ? '펼치기' : '접기'}</ToggleButton>
    </Section>
  );
};

export default GiftRanking;
