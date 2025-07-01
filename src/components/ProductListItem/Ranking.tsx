import styled from '@emotion/styled';
import { BaseProductListItem, type BaseProductListItemProps } from './Base';

type NewType = BaseProductListItemProps;

type Props = NewType & {
  rankingIndex: number;
};

export const RankingProductListItem = ({ rankingIndex, ...props }: Props) => {
  return (
    <Wrapper>
      <RankingLabel rankingIndex={rankingIndex}>{rankingIndex}</RankingLabel>
      <BaseProductListItem {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const RankingLabel = styled.span<Pick<Props, 'rankingIndex'>>(({ theme, rankingIndex }) => ({
  position: 'absolute',
  zIndex: 2,
  width: '1.25rem',
  minWidth: '1.25rem',
  height: '1.25rem',
  minHeight: '1.25rem',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.75rem',
  lineHeight: 1,
  fontWeight: 700,
  top: '0.25rem',
  left: '0.25rem',
  color: theme.colors.scale.gray00,
  backgroundColor: rankingIndex <= 3 ? theme.colors.scale.red600 : theme.colors.scale.gray600,
}));
