import RankingCategory from './RankingCategory';
import RankingTextCategory from './RankingTextCategory';
import RankingItem from './RankingItem';
import styled from '@emotion/styled';
import { mockGiftItems } from '@/mocks/itemListMock';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionContainer, SectionTitle } from '@/components/Common/SectionLayout';

const DEFAULT_GENDER = '전체';
const DEFAULT_CATEGORY = '받고싶어한';

const RankingSection = () => {
  const [showAll, setShowAll] = useState(false);
  const item = mockGiftItems[0];
  const RANK_COUNT = showAll ? 12 : 6;
  const toggleShowAll = () => setShowAll((prev) => !prev);

  const [searchParams, setSearchParams] = useSearchParams();
  const gender = searchParams.get('gender') || DEFAULT_GENDER;
  const category = searchParams.get('category') || DEFAULT_CATEGORY;

  const handleGenderChange = (newGender: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('gender', newGender);
      return newParams;
    });
  };

  const handleCategoryChange = (newCategory: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('category', newCategory);
      return newParams;
    });
  };

  return (
    <SectionContainer>
      <SectionTitle>실시간 급상승 선물랭킹</SectionTitle>
      <RankingCategory selected={gender} onChange={handleGenderChange} />
      <RankingTextCategory selected={category} onChange={handleCategoryChange} />
      <RankingGrid>
        {Array.from({ length: RANK_COUNT }).map((_, index) => (
          <RankingItem key={index} rank={index + 1} {...item} />
        ))}
      </RankingGrid>
      <MoreButton onClick={toggleShowAll}>{showAll ? '접기' : '더보기'}</MoreButton>
    </SectionContainer>
  );
};

export default RankingSection;

const RankingGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px 8px;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const MoreButton = styled.button`
  margin: ${({ theme }) => theme.spacing.spacing3} auto 0;
  width: 100%;
  display: block;
  font-weight: bold;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;
