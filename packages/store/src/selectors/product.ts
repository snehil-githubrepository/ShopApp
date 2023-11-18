// selectors/product.ts
import { selector } from "recoil";
import { productState, Product } from "../atoms/product";

export const productList = selector<Product[]>({
  key: "productListState",
  get: ({ get }) => {
    const state = get(productState);

    return state.products;
  },
});

export const isProductLoading = selector<boolean>({
  key: "isProductLoadingState",
  get: ({ get }) => {
    const state = get(productState);

    return state.isLoading;
  },
});
