import type { Product } from "@/mocks/types";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_PRODUCTS } from "@/mocks/products_list_mock";
import RisingItem from "@/components/RisingSection/RisingItem";

const INITIAL_VISIBLE_COUNT = 6;

export default function RisingList() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const navigate = useNavigate();

  const handleItemClick = (item: Product & { id: number }) => {
    navigate(`/order/${item.id}`);
  };

  return (
    <Wrapper>
      <Grid>
        {MOCK_PRODUCTS.slice(0, visibleCount).map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item)}>
            <RisingItem product={item} />
          </div>
        ))}
      </Grid>
      {visibleCount < MOCK_PRODUCTS.length && (
        <MoreButton onClick={() => setVisibleCount(MOCK_PRODUCTS.length)}>
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
