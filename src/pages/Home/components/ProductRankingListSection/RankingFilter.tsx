import type { ProductRankingFilterOption } from '@/types/products';
import styled from '@emotion/styled';
import { RankingFilterTargetTypeButton } from './RankingFilterTargetTypeButton';
import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { RankingFilterRankTypeButton } from './RankingFilterRankTypeButton';

type Props = {
  option: ProductRankingFilterOption;
  onOptionChange: (option: ProductRankingFilterOption) => void;
};

export const ProductRankingFilter = ({ option, onOptionChange }: Props) => {
  const handleOptionChange = (
    key: keyof ProductRankingFilterOption,
    value: ProductRankingFilterOption[keyof ProductRankingFilterOption],
  ) => {
    onOptionChange({ ...option, [key]: value });
  };

  return (
    <Wrapper>
      <TargetTypeWrapper>
        <RankingFilterTargetTypeButton
          value='ALL'
          selected={option.targetType === 'ALL'}
          onClick={() => handleOptionChange('targetType', 'ALL')}
        />
        <RankingFilterTargetTypeButton
          value='FEMALE'
          selected={option.targetType === 'FEMALE'}
          onClick={() => handleOptionChange('targetType', 'FEMALE')}
        />
        <RankingFilterTargetTypeButton
          value='MALE'
          selected={option.targetType === 'MALE'}
          onClick={() => handleOptionChange('targetType', 'MALE')}
        />
        <RankingFilterTargetTypeButton
          value='TEEN'
          selected={option.targetType === 'TEEN'}
          onClick={() => handleOptionChange('targetType', 'TEEN')}
        />
      </TargetTypeWrapper>
      <HorizontalSpacing size='spacing4' />
      <RankTypeWrapper>
        <RankingFilterRankTypeButton
          label='받고 싶어한'
          value='MANY_WISH'
          selected={option.rankType === 'MANY_WISH'}
          onClick={() => handleOptionChange('rankType', 'MANY_WISH')}
        />
        <RankingFilterRankTypeButton
          label='많이 선물한'
          value='MANY_RECEIVE'
          selected={option.rankType === 'MANY_RECEIVE'}
          onClick={() => handleOptionChange('rankType', 'MANY_RECEIVE')}
        />
        <RankingFilterRankTypeButton
          label='위시로 받은'
          value='MANY_WISH_RECEIVE'
          selected={option.rankType === 'MANY_WISH_RECEIVE'}
          onClick={() => handleOptionChange('rankType', 'MANY_WISH_RECEIVE')}
        />
      </RankTypeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  borderRadius: '1rem',
  backgroundColor: theme.colors.semantic.background.default,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const TargetTypeWrapper = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing.spacing2,
}));

const RankTypeWrapper = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid rgba(70, 132, 233, 0.1)',
  backgroundColor: theme.colors.semantic.info.background,
  borderRadius: '0.5rem',
  padding: `${theme.spacing.spacing3} ${theme.spacing.spacing4}`,
}));
