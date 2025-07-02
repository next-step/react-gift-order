/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState } from 'react';
import { MOCK_PRICE_INFO } from './mock';
import RisingItem from './RisingItem';

const INITIAL_VISIBLE_COUNT = 6;

const items = Array.from({ length: 21 }, (_, i) => ({
  ...MOCK_PRICE_INFO,
  id: i + 1,
}));

export default function RisingList() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  return (
    <Wrapper>
      <Grid>
        {items.slice(0, visibleCount).map((item) => (
          <RisingItem key={item.id} {...item} />
        ))}
      </Grid>
      {visibleCount < items.length && (
        <MoreButton onClick={() => setVisibleCount(items.length)}>
          더보기
        </MoreButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const MoreButton = styled.button`
  margin: 16px auto 0;
  display: block;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  background: ${({ theme }) => theme.colors.default};
  color: ${({ theme }) => theme.colors.gray1000};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  cursor: pointer;
`;
