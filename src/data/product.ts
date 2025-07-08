export interface Product {
  id: number;
  name: string;
  imageURL: string;
  price: {
    sellingPrice: number;
  };
  brandInfo: {
    name: string;
    id: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: '상품 1',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 10000,
    },
    brandInfo: {
      name: '브랜드 1',
      id: 1,
    },
  },
  {
    id: 2,
    name: '상품 2',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 20000,
    },
    brandInfo: {
      name: '브랜드 2',
      id: 2,
    },
  },
  {
    id: 3,
    name: '상품 3',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 30000,
    },
    brandInfo: {
      name: '브랜드 3',
      id: 3,
    },
  },
  {
    id: 4,
    name: '상품 4',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 40000,
    },
    brandInfo: {
      name: '브랜드 4',
      id: 4,
    },
  },
  {
    id: 5,
    name: '상품 5',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 50000,
    },
    brandInfo: {
      name: '브랜드 5',
      id: 5,
    },
  },
  {
    id: 6,
    name: '상품 6',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 60000,
    },
    brandInfo: {
      name: '브랜드 6',
      id: 6,
    },
  },
  {
    id: 7,
    name: '상품 7',
    imageURL: 'https://via.placeholder.com/150',
    price: {
      sellingPrice: 70000,
    },
    brandInfo: {
      name: '브랜드 7',
      id: 7,
    },
  },
];