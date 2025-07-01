import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section } from '@/components/layout';
import FilterButtonGroup from './FilterButtonGroup';
import ProductGrid from './ProductGrid';
import MoreButton from './MoreButton';
import { type Product } from './ProductCard';
import { products } from '@/data';

const targetOptions = [
  { value: 'ALL', label: '전체' },
  { value: 'FEMALE', label: '여성이' },
  { value: 'MALE', label: '남성이' },
  { value: 'TEEN', label: '청소년이' },
] as const;

const rankOptions = [
  { value: 'MANY_WISH', label: '받고 싶어한' },
  { value: 'MANY_RECEIVE', label: '많이 선물한' },
  { value: 'MANY_WISH_RECEIVE', label: '위시로 받은' },
] as const;

type TargetType = (typeof targetOptions)[number]['value'];
type RankType = (typeof rankOptions)[number]['value'];

// TODO: 실제 랭킹 API에서 데이터 가져오도록 구현 (현재는 BBQ 데이터 21개 복제)
const generateRankingProducts = (): Product[] => {
  const baseProduct = products.find((p) => p.brandInfo.name === 'BBQ');
  if (!baseProduct) {
    console.warn('BBQ 상품을 찾을 수 없습니다.');
    return [];
  }

  return Array.from({ length: 21 }, (_, index) => ({
    // BBQ 데이터를 21개로 복제
    id: `${baseProduct.id}-${index + 1}`,
    productId: baseProduct.id,
    productName: baseProduct.name,
    price: baseProduct.price.sellingPrice,
    brandName: baseProduct.brandInfo.name,
    image: baseProduct.imageURL,
    rank: index + 1,
    isTopThree: index < 3,
  }));
};

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMore, setShowMore] = useState(false); // 더보기는 URL에 저장하지 않음 (UX 고려)

  // URL 쿼리 파라미터에서 필터 상태 읽기 및 유효성 검증
  const getValidTargetType = (param: string | null): TargetType => {
    const validValues = targetOptions.map((option) => option.value);
    return validValues.includes(param as TargetType)
      ? (param as TargetType)
      : 'ALL';
  };

  const getValidRankType = (param: string | null): RankType => {
    const validValues = rankOptions.map((option) => option.value);
    return validValues.includes(param as RankType)
      ? (param as RankType)
      : 'MANY_WISH';
  };

  const targetType = getValidTargetType(searchParams.get('target'));
  const rankType = getValidRankType(searchParams.get('rank'));

  const rankingProducts = generateRankingProducts();

  const handleTargetChange = (value: string) => {
    // URL 쿼리 파라미터 업데이트: ?target=value&rank=기존값
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('target', value);
      return newParams;
    });
  };

  const handleRankChange = (value: string) => {
    // URL 쿼리 파라미터 업데이트: ?target=기존값&rank=value
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('rank', value);
      return newParams;
    });
  };

  return (
    <Section title="실시간 급상승 선물랭킹" spacing="md">
      <FilterButtonGroup
        type="target"
        options={targetOptions}
        selected={targetType}
        onChange={handleTargetChange}
      />

      <FilterButtonGroup
        type="rank"
        options={rankOptions}
        selected={rankType}
        onChange={handleRankChange}
      />

      <ProductGrid products={rankingProducts} showMore={showMore} />

      <MoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? '접기' : '더보기'}
      </MoreButton>
    </Section>
  );
};

export default RankingSection;
