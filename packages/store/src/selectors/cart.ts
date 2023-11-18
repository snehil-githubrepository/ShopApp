// selectors/cart.ts
import { selector } from "recoil";
import { cartState, CartItem } from "../atoms/cart";

export const cartItems = selector<CartItem[]>({
  key: "cartItemsState",
  get: ({ get }) => {
    const state = get(cartState);

    return state.items;
  },
});

export const cartTotal = selector<number>({
  key: "cartTotalState",
  get: ({ get }) => {
    const state = get(cartState);

    return state.total;
  },
});
