import { product } from "@/__mock__/";

export const generateMockArray = () => {
  return Array.from({ length: 21 }, (_, index) => ({
    ...product,
    id: product.id + index,
    name: `${product.name}`,
  }));
};
