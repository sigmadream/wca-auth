import type { State, Action } from "./types";

export const initialState: State = {
  accessToken: null,
};

type Reducer = (state: State, action: Action) => State;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_COMPLETE":
      const { accessToken } = action;
      return { ...state, accessToken };
    default:
      return state;
  }
};

export default reducer;
