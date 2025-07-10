import { MOCK_PRICE_INFO } from "@/mocks/product_mock";
import type { Product } from "@/mocks/types";

export const MOCK_PRODUCTS: (Product & { id: number })[] = Array.from(
  { length: 21 },
  (_, i) => ({
    ...MOCK_PRICE_INFO,
    id: i + 1,
  })
);
