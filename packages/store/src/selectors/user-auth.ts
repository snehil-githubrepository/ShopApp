import { selector } from "recoil";
import { userAuthState, User, UserAuthState } from "../atoms/user-auth";

export const isAuthenticated = selector<boolean>({
  key: "isAuthenticatedState",
  get: ({ get }) => {
    const state = get<UserAuthState>(userAuthState); // Define the type here

    return state.isAuthenticated;
  },
});

export const currentUser = selector<User | null>({
  key: "currentUserState",
  get: ({ get }) => {
    const state = get<UserAuthState>(userAuthState); // Define the type here

    return state.user;
  },
});
