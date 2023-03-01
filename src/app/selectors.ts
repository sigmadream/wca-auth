import type { State } from "./types";

export const accessTokenSelector = (state: State) => state.accessToken;
export const isSignedInSelector = (state: State) => !!state.accessToken;
