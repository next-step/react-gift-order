import { Typography } from '@/components/common/Typography';
import type { ProductRankingFilterOption } from '@/types/products';
import styled from '@emotion/styled';

type Props = {
  value: ProductRankingFilterOption['targetType'];
  selected: boolean;
  onClick: (value: ProductRankingFilterOption['targetType']) => void;
};

export const RankingFilterTargetTypeButton = ({ value, selected, onClick }: Props) => {
  return (
    <Wrapper onClick={() => onClick(value)}>
      <Icon selected={selected}>{TARGET_TYPE_TEXT[value].icon}</Icon>
      <Typography
        as='p'
        variant={selected ? 'label1Bold' : 'label1Regular'}
        color={selected ? 'blue700' : 'gray700'}
      >
        {TARGET_TYPE_TEXT[value].label}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.button(({ theme }) => ({
  width: '3.625rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.spacing1,
}));

const TARGET_TYPE_TEXT = {
  ALL: {
    icon: 'ALL',
    label: '전체',
  },
  FEMALE: {
    icon: '👩🏻',
    label: '여성이',
  },
  MALE: {
    icon: '👨🏻',
    label: '남성이',
  },
  TEEN: {
    icon: '👦🏻',
    label: '청소년이',
  },
};

const Icon = styled.div<Pick<Props, 'selected'>>(({ theme, selected }) => ({
  width: '2.75rem',
  height: '2.75rem',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: selected ? theme.colors.scale.gray00 : theme.colors.scale.blue400,
  ...theme.typography.subtitle2Bold,
  backgroundColor: selected
    ? theme.colors.semantic.info.default
    : theme.colors.semantic.info.background,
  transition: 'background-color 200ms',
}));
