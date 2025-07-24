import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/product';
import type { Product } from '@/data/product';
import * as S from '@components/TrendRankingStyle';
import { FilterGender, FilterType } from '@components/TrendRankingFilter';

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
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialGender = (): GenderLabel => {
    const genderFromUrl = searchParams.get('gender');
    if (genderList.some((g) => g.label === genderFromUrl)) {
      return genderFromUrl as GenderLabel;
    }
    return 'All';
  };

  const getInitialType = (): TypeLabel => {
    const typeFromUrl = searchParams.get('type');
    if (typeList.includes(typeFromUrl as TypeLabel)) {
      return typeFromUrl as TypeLabel;
    }
    return '받고 싶어한';
  };

  const [selectedGender, setSelectedGender] =
    useState<GenderLabel>(getInitialGender);
  const [selectedType, setSelectedType] = useState<TypeLabel>(getInitialType);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGenderClick = (label: string) => {
    const genderLabel = label as GenderLabel;
    setSelectedGender(genderLabel);
    setSearchParams({ gender: genderLabel, type: selectedType });
  };

  const handleTypeSelect = (label: string) => {
    const typeLabel = label as TypeLabel;
    setSelectedType(typeLabel);
    setSearchParams({ gender: selectedGender, type: typeLabel });
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    navigate(`/order?productId=${product.id}`);
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
    console.log('선택된 Product:', selectedProduct);
  }, [selectedProduct]);

  return (
    <S.Container>
      <h2>실시간 급상승 선물랭킹</h2>

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
