export const getValidValue = <T extends string>(
  param: string | null,
  validValues: readonly string[],
  defaultValue: T
): T => {
  return validValues.includes(param as T) ? (param as T) : defaultValue;
};

export const getValidValues = (options: readonly { value: string }[]) =>
  options.map((option) => option.value);

import { products } from '@/data';
import { type Product } from '@/components/ranking/ProductCard';

// TODO: 실제 랭킹 API에서 데이터 가져오도록 구현 (현재는 BBQ 데이터 21개 복제)
export const generateRankingProducts = (): Product[] => {
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
