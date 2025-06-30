import { productList } from '@/data/products';
import * as S from './GiftRankingSection.styles';
import ProductItem from './ProductItem';
import { useState } from 'react';
const GiftRankingSection = () => {
  // 목데이터 반복
  const repeatedProducts = Array(9).fill(productList[0]);

  // 필터 클릭
  const [selectedReceiver, setSelectedReceiver] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('받고 싶어한');

  const receivers = ['전체', '여성이', '남성이', '청소년이'];
  const sorts = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <S.Section>
      <S.FilterRow>
        {receivers.map((item) => (
          <S.FilterButton
            key={item}
            isActive={selectedReceiver === item}
            onClick={() => setSelectedReceiver(item)}
          >
            {item}
          </S.FilterButton>
        ))}
      </S.FilterRow>

      <S.FilterRow>
        {sorts.map((item) => (
          <S.FilterButton
            key={item}
            isActive={selectedSort === item}
            onClick={() => setSelectedSort(item)}
          >
            {item}
          </S.FilterButton>
        ))}
      </S.FilterRow>
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
