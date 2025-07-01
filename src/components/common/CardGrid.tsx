import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import type { Theme } from '@/styles/theme';

interface CardGridProps {
  children: ReactNode;
  columns?: number;
  columnGap?: keyof Theme['spacing'];
  rowGap?: keyof Theme['spacing'];
  marginBottom?: keyof Theme['spacing'];
}

const CardGrid = ({
  children,
  columns = 3,
  columnGap = 2,
  rowGap = 7,
  marginBottom = 4,
}: CardGridProps) => {
  return (
    <Grid
      columns={columns}
      columnGap={columnGap}
      rowGap={rowGap}
      marginBottom={marginBottom}
    >
      {children}
    </Grid>
  );
};

export default CardGrid;

const Grid = styled.div<{
  columns: number;
  columnGap: keyof Theme['spacing'];
  rowGap: keyof Theme['spacing'];
  marginBottom: keyof Theme['spacing'];
}>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  column-gap: ${({ theme, columnGap }) => theme.spacing[columnGap]};
  row-gap: ${({ theme, rowGap }) => theme.spacing[rowGap]};
  margin-bottom: ${({ theme, marginBottom }) => theme.spacing[marginBottom]};
`;
