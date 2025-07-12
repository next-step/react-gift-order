import type { ProductInfo } from '@/types/productInfo';
import { createContext } from 'react';

export const ProductInfoContext = createContext<ProductInfo | null>(null);
