export interface ProductInfo {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
}
