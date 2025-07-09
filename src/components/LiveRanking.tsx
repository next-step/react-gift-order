import { useState, useEffect } from 'react';
import products from '@/data/products';
import type { Product } from '@/data/products';
import * as S from '@/components/LiveRankingStyle';
import { FilterGender, FilterType } from '@/components/LiveRankingFilter';
import { useNavigate } from 'react-router-dom';

const genderList = [
  { label: 'All', icon: 'ALL' },
  { label: '남성이', icon: '👨‍🦰' },
  { label: '여성이', icon: '👩‍🦰' },
  { label: '청소년이', icon: '👦' },
];

const typeList = ['받고 싶어한', '많이 선물한', '위시로 받은'];

type GenderLabel = (typeof genderList)[number]['label'];
type TypeLabel = (typeof typeList)[number];

const TrendRanking = () => {
  const [selectedGender, setSelectedGender] = useState<GenderLabel>('All');
  const [selectedType, setSelectedType] = useState<TypeLabel>('받고 싶어한');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleGenderClick = (label: string) => {
    setSelectedGender(label);
  };

  const handleTypeSelect = (label: string) => {
    setSelectedType(label);
  };

  const handleProductSelect = (product: Product) => {
    navigate(`/order/${product.id}`);
  };

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleCount(6);
      setIsExpanded(false);
    } else {
      setVisibleCount(products.length);
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    console.log('선택된 Gender:', selectedGender);
  }, [selectedGender]);

  useEffect(() => {
    console.log('선택된 Type:', selectedType);
  }, [selectedType]);

  return (
    <S.Container>
      <S.RankingTitle>실시간 급상승 선물랭킹</S.RankingTitle>

      <S.GenderTab>
        {genderList.map(({ icon, label }) => (
          <FilterGender
            key={label}
            icon={icon}
            label={label}
            isActive={selectedGender === label}
            onClick={handleGenderClick}
          />
        ))}
      </S.GenderTab>

      <S.TypeTab>
        {typeList.map((label) => (
          <FilterType
            key={label}
            label={label}
            isActive={selectedType === label}
            onClick={handleTypeSelect}
          />
        ))}
      </S.TypeTab>

      <S.ProductTab>
        {products.slice(0, visibleCount).map((item, index) => (
          <S.ProductItem
            key={item.id}
            onClick={() => handleProductSelect(item)}
          >
            <S.Rank rank={index + 1}>{index + 1}</S.Rank>
            <S.ProductImage src={item.imageURL} alt={item.name} />
            <p>{item.brandInfo.name}</p>
            <p>{item.name}</p>
            <strong>{item.price.sellingPrice.toLocaleString()} 원</strong>
          </S.ProductItem>
        ))}
      </S.ProductTab>

      <S.MoreButton onClick={handleToggleView}>
        {isExpanded ? '접기' : '더보기'}
      </S.MoreButton>
    </S.Container>
  );
};

export default TrendRanking;
