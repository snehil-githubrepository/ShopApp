// atoms/userAuth.ts
import { atom } from "recoil";

export interface User {
  id: string;
  name: string;
  // Add more properties as needed
}

export interface UserAuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const userAuthState = atom<UserAuthState>({
  key: "userAuthState",
  default: {
    isAuthenticated: false,
    user: null,
  },
});
