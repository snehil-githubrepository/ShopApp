// atoms/cart.ts
import { atom } from "recoil";

export interface CartItem {
  productId: string;
  quantity: number;
  // Add more properties as needed
}

interface CartState {
  items: CartItem[];
  total: number;
  // Add more properties as needed
}

export const cartState = atom<CartState>({
  key: "cartState",
  default: {
    items: [],
    total: 0,
  },
});
