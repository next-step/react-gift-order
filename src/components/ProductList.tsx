import styled from '@emotion/styled';
import { products } from '@/data/products';
import { useState } from 'react';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 12px;
  list-style: none;
`;

const Item = styled.li`
  background: #fff;
  border-radius: 12px;
  box-shadow: none;
  padding: 12px;
  text-align: center;
`;

const MoreButton = styled.button`
  margin: 30px auto 20px auto;
  padding: 16px 0;
  width: 60%;
  height: 45px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  color: #222;
  font-size: 13px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &:active {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const DEFAULT_VISIBLE = 6; // 기본으로 보여줄 상품 개수

function ProductList() {
  const filtered = products;

  // 더보기/접기 state
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE);

  // 현재 보여줄 상품만 slice로 자르기
  const visibleProducts = filtered.slice(0, visibleCount);

  // 더보기/접기 버튼 노출 조건
  const isAllVisible = visibleCount >= filtered.length;
  const isFolded =
    visibleCount === DEFAULT_VISIBLE && filtered.length > DEFAULT_VISIBLE;

  return (
    <>
      <List>
        {visibleProducts.map((p, idx) => (
          <Item key={p.id}>
            {/* 상품 이미지 */}
            <img
              src={p.imageURL}
              alt={p.name}
              style={{ width: '100%', borderRadius: 8 }}
            />
            {/* 브랜드명 (회색, 작은 글씨) */}
            <div style={{ color: '#888', fontSize: 14, marginTop: 8 }}>
              {p.brandInfo.name}
            </div>
            {/* 상품명 (굵은 글씨) */}
            <div style={{ fontWeight: 700, fontSize: 16, marginTop: 4 }}>
              {p.name}
            </div>
            {/* 가격 (굵고 큰 글씨) */}
            <div style={{ fontWeight: 700, fontSize: 18, marginTop: 4 }}>
              {p.price.sellingPrice.toLocaleString()} 원
            </div>
          </Item>
        ))}
      </List>
      {/* 더보기/접기 버튼 */}
      {filtered.length > DEFAULT_VISIBLE && (
        <>
          {!isAllVisible && (
            <MoreButton onClick={() => setVisibleCount(filtered.length)}>
              더보기
            </MoreButton>
          )}
          {isAllVisible && (
            <MoreButton onClick={() => setVisibleCount(DEFAULT_VISIBLE)}>
              접기
            </MoreButton>
          )}
        </>
      )}
    </>
  );
}

export default ProductList;
