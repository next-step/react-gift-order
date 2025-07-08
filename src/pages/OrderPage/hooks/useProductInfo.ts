import { useParams } from "react-router-dom";
import { trendingGiftsMockData } from "@/data/trendingGfitsMockData";
import type { TrendingGiftsType } from "@/types/TrendingGiftsType";

export function useProductInfo(): TrendingGiftsType | null {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  // 현재는 mock 데이터로 대체
  const product = trendingGiftsMockData.find(
    (item) => item.id === parseInt(id, 10)
  );

  return product || null;
}
