import type { ProductRankingFilterOption } from '@/types/products';
import styled from '@emotion/styled';

type Props = {
  label: string;
  value: ProductRankingFilterOption['rankType'];
  selected: boolean;
  onClick: (value: ProductRankingFilterOption['rankType']) => void;
};

export const RankingFilterRankTypeButton = ({ label, value, selected, onClick }: Props) => {
  return (
    <Wrapper selected={selected} onClick={() => onClick(value)}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button<Pick<Props, 'selected'>>(({ theme, selected }) => ({
  width: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...(selected ? theme.typography.label1Bold : theme.typography.label1Regular),
  color: selected ? theme.colors.scale.blue700 : theme.colors.scale.blue500,
  transition: 'color 200ms, font-weight 200ms',
}));
