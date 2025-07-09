import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate, generatePath } from 'react-router-dom';
import { Section } from '@/components/layout';
import FilterButtonGroup from './FilterButtonGroup';
import ProductGrid from './ProductGrid';
import MoreButton from './MoreButton';
import { type Product } from './ProductCard';
import {
  getValidValue,
  getValidValues,
  generateRankingProducts,
} from '@/utils';
import { targetOptions, rankOptions, ROUTE_ORDER } from '@/constants';

type TargetType = (typeof targetOptions)[number]['value'];
type RankType = (typeof rankOptions)[number]['value'];

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMore, setShowMore] = useState(false); // 더보기는 URL에 저장하지 않음 (UX 고려)
  const navigate = useNavigate();

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

  // 상품 클릭 시 주문 페이지로 이동
  const handleProductClick = (product: Product) => {
    navigate(
      generatePath(`${ROUTE_ORDER}/:productId`, {
        productId: String(product.productId),
      })
    );
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

      <ProductGrid
        products={rankingProducts}
        showMore={showMore}
        onProductClick={handleProductClick}
      />

      <MoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? '접기' : '더보기'}
      </MoreButton>
    </Section>
  );
};

export default RankingSection;
