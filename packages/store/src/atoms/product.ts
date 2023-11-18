// atoms/product.ts
import { atom } from "recoil";

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // Add more properties as needed
}

interface ProductState {
  isLoading: boolean;
  products: Product[];
}

export const productState = atom<ProductState>({
  key: "productState",
  default: {
    isLoading: true,
    products: [],
  },
});
