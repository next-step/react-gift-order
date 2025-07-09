export interface ProductInfo {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}
