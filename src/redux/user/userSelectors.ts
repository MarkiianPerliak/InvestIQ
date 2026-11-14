import type { RootState } from "../store";

export const selectIsLogged = (state: RootState) => state.user.isLogged;