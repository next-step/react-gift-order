import { useState, useMemo, useEffect } from 'react';
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

// Generic validation 함수로 통합
const getValidValue = <T extends string>(
  param: string | null,
  validValues: readonly string[],
  defaultValue: T
): T => {
  return validValues.includes(param as T) ? (param as T) : defaultValue;
};

// Helper 함수로 valid values 생성
const getValidValues = (options: readonly { value: string }[]) =>
  options.map((option) => option.value);

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
  const targetValidValues = getValidValues(targetOptions);
  const rankValidValues = getValidValues(rankOptions);

  const targetParam = searchParams.get('target');
  const rankParam = searchParams.get('rank');

  const targetType = getValidValue(
    targetParam,
    targetValidValues,
    'ALL' as TargetType
  );
  const rankType = getValidValue(
    rankParam,
    rankValidValues,
    'MANY_WISH' as RankType
  );

  // 유효하지 않은 URL 파라미터가 있으면 기본값으로 수정
  useEffect(() => {
    const needsUpdate =
      (targetParam && targetParam !== targetType) ||
      (rankParam && rankParam !== rankType);

    if (needsUpdate) {
      setSearchParams(
        (prev) => {
          const newParams = new URLSearchParams(prev);
          if (targetParam && targetParam !== targetType) {
            newParams.set('target', targetType);
          }
          if (rankParam && rankParam !== rankType) {
            newParams.set('rank', rankType);
          }
          return newParams;
        },
        { replace: true }
      ); // replace로 히스토리에 남기지 않음
    }
  }, [targetParam, rankParam, targetType, rankType, setSearchParams]);

  // 랭킹 데이터 생성 최적화 - 매번 재생성 방지
  const rankingProducts = useMemo(() => generateRankingProducts(), []);

  // 공통 Parameter Handler로 통합
  const handleParamChange = (key: string, value: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set(key, value);
      return newParams;
    });
  };

  return (
    <Section title="실시간 급상승 선물랭킹" spacing="md">
      <FilterButtonGroup
        type="target"
        options={targetOptions}
        selected={targetType}
        onChange={(value) => handleParamChange('target', value)}
      />

      <FilterButtonGroup
        type="rank"
        options={rankOptions}
        selected={rankType}
        onChange={(value) => handleParamChange('rank', value)}
      />

      <ProductGrid products={rankingProducts} showMore={showMore} />

      <MoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? '접기' : '더보기'}
      </MoreButton>
    </Section>
  );
};

export default RankingSection;
