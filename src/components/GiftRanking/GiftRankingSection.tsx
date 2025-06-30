import { productList } from '@/data/products';
import * as S from './GiftRankingSection.styles';
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import FilterGroup from './FilterGroup';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '@/data/products.types';

const GiftRankingSection = () => {
  // 목데이터 반복
  const repeatedProducts: Product[] = Array(9)
    .fill(null)
    .map((_, index) => ({
      ...productList[0],
      id: index + 1,
    }));

  // 필터

  const receivers = ['전체', '여성이', '남성이', '청소년이'];
  const sorts = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  // URL 쿼리 파라미터에서 초기값 읽기
  const [searchParams, setSearchParams] = useSearchParams();

  const initialReceiver = searchParams.get('receiver') || '전체';
  const initialSort = searchParams.get('sort') || '받고 싶어한';

  const [selectedReceiver, setSelectedReceiver] = useState(initialReceiver);
  const [selectedSort, setSelectedSort] = useState(initialSort);

  // 필터 상태가 바뀔 때마다 URL 쿼리 업데이트
  useEffect(() => {
    setSearchParams({
      receiver: selectedReceiver,
      sort: selectedSort,
    });
  }, [selectedReceiver, selectedSort, setSearchParams]);

  return (
    <S.Section>
      <FilterGroup items={receivers} selected={selectedReceiver} onSelect={setSelectedReceiver} />
      <FilterGroup items={sorts} selected={selectedSort} onSelect={setSelectedSort} />
      <S.Grid>
        {repeatedProducts.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            imageURL={product.imageURL}
            sellingPrice={product.price.sellingPrice}
            brandImageURL={product.brandInfo.imageURL}
            brandName={product.brandInfo.name}
          />
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default GiftRankingSection;
